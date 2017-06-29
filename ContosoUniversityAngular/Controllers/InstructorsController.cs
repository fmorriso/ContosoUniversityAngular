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
	[Route("api/Instructors")]
	public class InstructorsController : BaseController
	{
		public InstructorsController(SchoolContext context) : base(context)
		{ }

		// GET: api/Instructors
		[HttpGet]
		public async Task<IEnumerable<Instructor>> GetInstructors()
		{
			return await _context.Instructors
				                 .Include(i => i.CourseAssignments)
								 .Include(i => i.OfficeAssignment)
				                 .OrderBy(column => column.LastName)
				                 .ThenBy(column => column.FirstMidName)
								 .AsNoTracking()
								 .ToListAsync();
		}

#if USE_NEW_CODE
		// GET: api/Instructors/Details
		[HttpGet("Details")]
		public async Task<IActionResult> Details()
		{
			var viewModel = new InstructorIndexData();
			viewModel.Instructors = await _context.Instructors
			  .Include(i => i.OfficeAssignment)
			  .Include(i => i.CourseAssignments)
			  .ThenInclude(i => i.Course)
			  .ThenInclude(i => i.Department)
			  .OrderBy(i => i.LastName)
			  .ThenBy(i => i.FirstMidName)
			  .ToListAsync();

#if USE_ARGS
			if (id != null)
			{
				Instructor instructor = viewModel.Instructors
					.Where(i => i.ID == id.Value).Single();
				viewModel.Courses = instructor.CourseAssignments.Select(s => s.Course);
			}

			if (courseID != null)
			{
				var selectedCourse = viewModel.Courses.Where(x => x.CourseID == courseID).Single();
				await _context.Entry(selectedCourse).Collection(x => x.Enrollments).LoadAsync();
				foreach (Enrollment enrollment in selectedCourse.Enrollments)
				{
					await _context.Entry(enrollment).Reference(x => x.Student).LoadAsync();
				}
				viewModel.Enrollments = selectedCourse.Enrollments;
			}

#endif
			return Ok(viewModel);
		} 
#endif

		// GET: api/Instructors/5
		[HttpGet("{id}")]
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
		[HttpPut("{id}")]
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
		[HttpPost]
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
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteInstructor([FromRoute] int id)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var instructor = await _context.Instructors.SingleOrDefaultAsync(m => m.ID == id);
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