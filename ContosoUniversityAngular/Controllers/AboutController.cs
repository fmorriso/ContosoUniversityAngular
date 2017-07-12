using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContosoUniversityAngular.Database;
using ContosoUniversityAngular.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.Extensions.Primitives;

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
			// start with a bare bones entity query
			var entityQuery = _context.StudentCountByEnrollmentDateView.Select(item => item);

			// check for OData query parameters.
			// Example: {?$skip=0&$top=3&$count=true}
			IQueryCollection queryParameters = Request.Query;

			if (queryParameters.ContainsKey("$skip"))
			{
				int n;
				if (int.TryParse(queryParameters["$skip"], out n))
				{
					if (n > 0)
					{
						entityQuery = entityQuery.Skip(n);
					}
				}
			}

			// [pageSize]="3" => $top=3 but how do we make sure the grid know there are more than 3 records total???
			if (queryParameters.ContainsKey("$top"))
			{
				int n;
				if (int.TryParse(queryParameters["$top"], out n))
				{
					entityQuery = entityQuery.Take(n);
				}
			}

			// check for optional OData $orderby specification and adapt the query accordingly
			if (queryParameters.ContainsKey("$orderby"))
			{
				entityQuery = AppendSortSpecificationToQuery(queryParameters, entityQuery);
			}
			else
			{
				// default sort
				var dict = new Dictionary<string, StringValues>
				{
					{ "$orderby", "enrollmentDate" }
				};
				var qc = new QueryCollection(dict);
				entityQuery = AppendSortSpecificationToQuery(qc, entityQuery);
			}

			return await entityQuery.AsNoTracking().ToListAsync(); ;
		}

		private static IQueryable<StudentCountByEnrollmentDateView> AppendSortSpecificationToQuery(IQueryCollection queryParameters, IQueryable<StudentCountByEnrollmentDateView> query)
		{
			StringValues orderbyValues;
			var exists = queryParameters.TryGetValue("$orderby", out orderbyValues);
			if (exists)
			{
				var orderbySingleColumn = orderbyValues.ToList().First();
				switch (orderbySingleColumn)
				{
					case "enrollmentDate":
						query = query.OrderBy(column => column.EnrollmentDate);
						break;

					case "enrollmentDate desc":
						query = query.OrderByDescending(column => column.EnrollmentDate);
						break;

					case "studentCount":
						query = query.OrderBy(column => column.StudentCount);
						break;

					case "studentCount desc":
						query = query.OrderByDescending(column => column.StudentCount);
						break;

					default:
						break;
				}
			}
			return query;
		}
	}
}
