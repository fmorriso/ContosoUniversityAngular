using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ContosoUniversityAngular.Database;
using ContosoUniversityAngular.Models;

namespace ContosoUniversityAngular.Controllers
{
    [Produces("application/json")]
    public class CoursesController : BaseController
    {
        public CoursesController(SchoolContext context) : base(context)
        {
        }

		// GET: api/Courses		
		/// <summary>
		/// Gets a list of courses
		/// </summary>
		/// <example>
		/// http://localhost:4200/api/courses/list
		/// </example>
		/// <returns></returns>
		[HttpGet("api/[controller]/[action]")]
		public async Task<IEnumerable<Course>> List()
	    {
			return await _context.Courses
				                 .Include(i => i.Department)
				                 .OrderBy(column => column.Title)
				                 .AsNoTracking()
				                 .ToListAsync();
		}

		/// <summary>
		/// Gets a single course by its id
		/// </summary>
		/// <example>
		/// http://localhost:4200/api/courses/4041
		/// </example>
		/// <param name="id"></param>
		/// <returns></returns>
		[HttpGet("api/[controller]/{id:int}")]
		public async Task<IActionResult> Course([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

	        var course = await _context.Courses.FindAsync(id);
			if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }

        // PUT: api/Courses/5
        [HttpPut("api/[controller]/{id:int}")]
        public async Task<IActionResult> PutCourse([FromRoute] int id, [FromBody] Course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != course.CourseID)
            {
                return BadRequest();
            }

            _context.Entry(course).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseExists(id))
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

        // POST: api/Courses
        [HttpPost("api/[controller]")]
		public async Task<IActionResult> PostCourse([FromBody] Course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Courses.Add(course);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CourseExists(course.CourseID))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCourse", new { id = course.CourseID }, course);
        }

        // DELETE: api/Courses/5
        [HttpDelete("api/[controller]/{id:int}")]
        public async Task<IActionResult> DeleteCourse([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

	        var course = await _context.Courses.FindAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            _context.Courses.Remove(course);
            await _context.SaveChangesAsync();

            return Ok(course);
        }

        private bool CourseExists(int id)
        {
            return _context.Courses.Any(e => e.CourseID == id);
        }
    }
}