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

		/// <summary>
		/// Returns a list showing a count of students by enrollment date.
		/// </summary>
		/// <remarks>
		/// The list includes the total number of items
		/// </remarks>
		/// <returns></returns>
		[HttpGet("api/[controller]/[action]")]
		public async Task<EntityList> Summary()
		{
			// start with a bare bones entity query
			var entityQuery = _context.StudentCountByEnrollmentDateView.Select(item => item);

			// Since the grid needs the original total in order to perform paging,
			// go get that value.
			// TODO: perform this *AFTER* any future OData filtering logic is implemented
			var totalEntries = await entityQuery.AsNoTracking().CountAsync();

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

			// [pageSize]="3" => $top=3 but how do we make sure the grid knows there are more than 3 records total???
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
				entityQuery = entityQuery.OrderBy(column => column.EnrollmentDate);
			}

			var items = await entityQuery.AsNoTracking().ToListAsync();

			// convert to list that includes grand total so grid can page
			var entityList = new EntityList()
			{
				TotalItems = totalEntries
			};
			entityList.ListOfItems.AddRange(items);

			return entityList;
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
