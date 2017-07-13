using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ContosoUniversityAngular.Database;
using ContosoUniversityAngular.Models;

namespace ContosoUniversityAngular.Controllers
{
    [Produces("application/json")]
    public class StudentsController : BaseController
    {
        public StudentsController(SchoolContext context) : base(context)
        {}

	    /// <summary>
	    /// Gets a list of students that are suitable for displaying
	    /// in some type of table, list or grid control by the UI.
	    /// </summary>
	    /// <example>
	    /// http://localhost:4200/api/students/list
	    /// </example>
	    /// <returns></returns>
	    [HttpGet("api/[controller]/[action]")]
		public async Task<IEnumerable<Student>> List()
        {
            return await _context.Students
                                 .OrderBy(column => column.LastName)
                                 .ThenBy(column => column.FirstMidName)
                                 .AsNoTracking()
                                 .ToListAsync();
        }

        // GET: api/Students/5
        [HttpGet("api/[controller]/{id:int}")]
        public async Task<IActionResult> GetStudent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            return Ok(student);
        }

        // PUT: api/Students/5
        [HttpPut("api/[controller]/{id:int}")]
        public async Task<IActionResult> PutStudent([FromRoute] int id, [FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != student.ID)
            {
                return BadRequest();
            }

            _context.Entry(student).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
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

        // POST: api/Students
        [HttpPost("api/[controller]")]
        public async Task<IActionResult> AddStudent([FromBody] Student student)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudent", new { id = student.ID }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("api/[controller]/{id}")]
        public async Task<IActionResult> DeleteStudent([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return Ok(student);
        }

        private bool StudentExists(int id)
        {
            return _context.Students.Any(e => e.ID == id);
        }
    }
}