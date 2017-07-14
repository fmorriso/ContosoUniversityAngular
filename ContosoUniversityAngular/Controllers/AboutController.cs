using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ContosoUniversityAngular.Database;
using ContosoUniversityAngular.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

namespace ContosoUniversityAngular.Controllers
{
	[Produces("application/json")]
	public class AboutController : BaseController
	{
		public static int TotalItems { get; set; }

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

			// check for OData query parameters.
			// Example: {?$skip=0&$top=3&$count=true}
			IQueryCollection queryParameters = Request.Query;

			// Filtering reference: http://www.telerik.com/kendo-angular-ui/components/grid/filtering/built-in-template/
			//TODO: handle filtering
			// Example: url=api/about/summary?$skip=0&$top=3&$filter=studentCount gt 2&$count=true, state={"skip":0,"take":3,"sort":[],"group":[],"filter":{"filters":[{"field":"studentCount","operator":"gt","value":2}],"logic":"and"}}
			if (queryParameters.ContainsKey("$filter"))
			{
				// extract first filter 
			}

			// Since the grid needs the original total in order to perform paging,
			// go get that value.
			// TODO: perform this *AFTER* any future OData filtering logic is implemented
			if (TotalItems == 0)
			{
				TotalItems = await entityQuery.AsNoTracking().CountAsync();
			}

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

			// Check for optional OData $orderby specification and adapt the query accordingly
			// NOTE: this logic only handles one sort specification at a time.
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
				TotalItems = TotalItems
			};
			entityList.ListOfItems.AddRange(items);

			return entityList;
		}

		/// <summary>
		/// Checks for sort specification and generates additional query information
		/// </summary>
		/// <remarks>
		/// This is hard-coded specifically for the StudentCountByEnrollmentDateView
		/// because, as of July 2017, EF.Core 1.1 and ASP.Net Core 1.1 do not have a generic
		/// OData V4 interface like the older Web API 2.2 has.
		/// It only handles a single sort criteria.
		/// </remarks>
		/// <param name="queryParameters"></param>
		/// <param name="query"></param>
		/// <returns></returns>
		private static IQueryable<StudentCountByEnrollmentDateView> AppendSortSpecificationToQuery(IQueryCollection queryParameters, IQueryable<StudentCountByEnrollmentDateView> query)
		{
			StringValues orderbyValues;
			var exists = queryParameters.TryGetValue("$orderby", out orderbyValues);
			if (exists)
			{
				// NOTE: only handles the first sort specification, not multiple
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
