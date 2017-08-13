using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

using ContosoUniversityAngular.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ContosoUnivserityAngular;
using System.Diagnostics;

namespace ContosoUniversityAngular.Controllers
{
	[Produces("application/json")]
	public class AboutController : BaseController
	{
		public static int TotalItems { get; set; }
	    private IConfiguration configuration;

		public AboutController(SchoolContext context, IConfiguration configuration) : base(context)
		{
            // capture access to appSettings.json via dependency injection.
		    this.configuration = configuration;

		    // pull out some values from appSettings.json 
		    string dummyTest1 = string.Empty;
		    IConfigurationSection dummyTest1config = configuration.GetSection("Dummy:test1");
            if (dummyTest1config != null)
		    {
		        dummyTest1 = dummyTest1config.Value;
		        Debug.WriteLine($"test1={dummyTest1}");
		    }

		    string dummyTest2 = string.Empty;
		    IConfigurationSection dummyTest2config = configuration.GetSection("Dummy:test2");
		    if (dummyTest2config != null)
		    {
		        dummyTest2 = dummyTest2config.Value;
		        Debug.WriteLine($"test2={dummyTest2}");
		    }
        }

		#region Telerik Kendo-Angular Integration

		// http://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/
		// http://www.telerik.com/kendo-angular-ui/components/dataquery/#installation

		/// <summary>
		/// Returns a list of Enrollment Dates and the number of students enrolled on that date.
		/// </summary>
		/// <remarks>
		/// The return value is a JSON representation of a Kendo.Mvc.Extensions.Extensions.ToDataSourceResult,
		/// which is structured as, for example:
		/// {
		///		"data": [
		///			{
		///				"enrollmentDate": "2005-09-01T00:00:00",
		///				"studentCount": 1
		///			},
		/// ....
		///	       ],
		///	    "total": 5,
		///	    "aggregateResults": null,
		///	    "errors": null
		/// }       
		/// </remarks>
		/// <param name="request"></param>
		/// <returns></returns>
		[HttpGet("api/[controller]/[action]")]
		public async Task<JsonResult> Summary([DataSourceRequest] DataSourceRequest request)
		{
			var result = Json(await _context.StudentCountByEnrollmentDateView
				                            .AsNoTracking()
											.ToDataSourceResultAsync(request));
			return result;
		}

		#endregion

	}
}
