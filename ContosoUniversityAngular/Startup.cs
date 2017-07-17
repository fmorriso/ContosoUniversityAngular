using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using ContosoUniversityAngular.Database;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Net;
using Microsoft.AspNetCore.Http;
using System.IO;

namespace ContosoUnivserityAngular
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
			
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
	        services.AddMvc().AddJsonOptions(options => {
		        options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
		        options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
	        });

			// Add framework services.
			var connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<SchoolContext>(options =>
            {
	            options.UseSqlServer(connectionString,
		            sqlServerOptionsAction: sqlOptions =>
		            {
			            sqlOptions.EnableRetryOnFailure(maxRetryCount: 5,
				            maxRetryDelay: TimeSpan.FromSeconds(20),
				            errorNumbersToAdd: null);
		            });
            });

            services.AddMvc();

		}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SchoolContext context)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

			// https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa
			app.Use(async (httpContext, next) =>
	        {
		        await next();
		        if (httpContext.Response.StatusCode == (int)HttpStatusCode.NotFound
				 && !Path.HasExtension(httpContext.Request.Path.Value)
				 && !httpContext.Request.Path.Value.StartsWith("/api/"))
		        {
			        httpContext.Request.Path = "/index.html";
			        await next();
		        }
	        });

			// https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing
			app.UseMvcWithDefaultRoute();
	        app.UseDefaultFiles();
	        app.UseStaticFiles();

			DbInitializer.Initialize(context);
        }
    }
}
