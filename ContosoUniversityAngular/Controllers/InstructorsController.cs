using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ContosoUniversityAngular.Database;
using ContosoUniversityAngular.Models;
using ContosoUniversityAngular.Models.SchoolViewModels;

namespace ContosoUniversityAngular.Controllers
{
	[Produces("application/json")]
	public class InstructorsController : BaseController
	{
		public InstructorsController(SchoolContext context) : base(context)
		{ }

		/// <summary>
		/// Gets a list of instructors that are suitable for displaying
		/// in some type of table, list or grid control by the UI.
		/// </summary>
		/// <example>
		/// http://localhost:4200/api/instructors/list
		/// </example>
		/// <returns></returns>
		[HttpGet("api/[controller]/[action]")]
		public async Task<IEnumerable<Instructor>> List()
		{
			return await _context.Instructors
				                 .Include(i => i.CourseAssignments)
								 .Include(i => i.OfficeAssignment)
				                 .OrderBy(column => column.LastName)
				                 .ThenBy(column => column.FirstMidName)
								 .AsNoTracking()
								 .ToListAsync();
		}

		// GET: api/Instructors/5
		[HttpGet("api/[controller]/{id:int}")]
		public async Task<IActionResult> GetInstructor([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var instructor = await _context.Instructors.FindAsync(id);

			if (instructor == null)
			{
				return NotFound();
			}

			return Ok(instructor);
		}

		// PUT: api/Instructors/5
		[HttpPut("api/[controller]/{id:int}")]
		public async Task<IActionResult> PutInstructor([FromRoute] int id, [FromBody] Instructor instructor)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			if (id != instructor.ID)
			{
				return BadRequest();
			}

			_context.Entry(instructor).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!InstructorExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/Instructors
		[HttpPost("api/[controller]")]
		public async Task<IActionResult> PostInstructor([FromBody] Instructor instructor)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Instructors.Add(instructor);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetInstructor", new { id = instructor.ID }, instructor);
		}

		// DELETE: api/Instructors/5
		[HttpDelete("api/[controller]/{id:int}")]
		public async Task<IActionResult> DeleteInstructor([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var instructor = await _context.Instructors.FindAsync(id);
			if (instructor == null)
			{
				return NotFound();
			}

			_context.Instructors.Remove(instructor);
			await _context.SaveChangesAsync();

			return Ok(instructor);
		}

		private bool InstructorExists(int id)
		{
			return _context.Instructors.Any(e => e.ID == id);
		}
	}
}