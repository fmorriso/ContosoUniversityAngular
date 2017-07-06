using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContosoUniversityAngular.Database;
using ContosoUniversityAngular.Models;
using Microsoft.EntityFrameworkCore;

namespace ContosoUniversityAngular.Controllers
{
	[Produces("application/json")]
	public class AboutController : BaseController
	{
		public AboutController(SchoolContext context) : base(context)
		{
		}

		// https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing
		[HttpGet("api/[controller]/[action]")]
		public async Task<IEnumerable<StudentCountByEnrollmentDateView>> Summary()
		{
			return await _context.StudentCountByEnrollmentDateView
				                 .OrderBy(column => column.EnrollmentDate)
				                 .AsNoTracking()
				                 .ToListAsync();
		}
	}
}
