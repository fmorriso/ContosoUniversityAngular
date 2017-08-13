using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

using System;
using System.Net;

using System.IO;
using ContosoUniversityAngular.Database;
using System.Diagnostics;

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
			// Maintain property names during serialization. See:
			// https://github.com/aspnet/Announcements/issues/194
			services.AddMvc()
					.AddJsonOptions(options =>
					{
						options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
						//options.SerializerSettings.ContractResolver = new DefaultContractResolver();
						options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
					})
					;

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

            // Make the appSettings.json available to other parts of the application, such as Controllers.
            // NOTE: requires the following dependenc injection into the constructor of whatever class needs
            //       access to appSettings:
            //       public YourClassOrController(IConfiguration configuration, ... anything else)
            //       You should probably capture the configuration in a private class variable.
            services.AddSingleton<IConfiguration>(Configuration);
            
            services.AddMvc();
			services.AddKendo();

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

			// http://docs.telerik.com/aspnet-core/getting-started/getting-started#using-vs-2017
			app.UseKendo(env);

			// https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing
			app.UseMvcWithDefaultRoute();
			app.UseDefaultFiles();
			app.UseStaticFiles();

			DbInitializer.Initialize(context);
		}
	}
}
