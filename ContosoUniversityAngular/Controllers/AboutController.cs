using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using Kendo.Mvc.UI;
using Kendo.Mvc.Extensions;

using ContosoUniversityAngular.Database;
using Microsoft.EntityFrameworkCore;

namespace ContosoUniversityAngular.Controllers
{
	[Produces("application/json")]
	public class AboutController : BaseController
	{
		public static int TotalItems { get; set; }

		public AboutController(SchoolContext context) : base(context)
		{
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
