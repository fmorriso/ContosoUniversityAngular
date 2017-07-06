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
	[Route("api/About")]
	public class AboutController : BaseController
	{
		public AboutController(SchoolContext context) : base(context)
		{
		}

		[HttpGet]
		public async Task<IEnumerable<StudentCountByEnrollmentDateView>> GetCountByEnrollmentDate()
		{
			return await _context.StudentCountByEnrollmentDateView
				                 .OrderBy(column => column.EnrollmentDate)
				                 .AsNoTracking()
				                 .ToListAsync();
		}
	}
}
