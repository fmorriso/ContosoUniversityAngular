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
    public class DepartmentsController : BaseController
    {
        public DepartmentsController(SchoolContext context): base(context)
        {}

		/// <summary>
		/// Gets a list of departments "flattened" so they are suitable for displaying
		/// in some type of table, list or grid control by the UI.
		/// </summary>
		/// <example>
		/// http://localhost:4200/api/departments/list
		/// </example>
		/// <returns></returns>
		[HttpGet("api/[controller]/[action]")]
		public async Task<IEnumerable<DepartmentSummaryView>> List()
	    {
		    return await _context.DepartmentSummaryView
			                     .OrderBy(column => column.Name)
			                     .AsNoTracking()
			                     .ToListAsync();
	    }

		// GET: api/Departments/5
		[HttpGet("api/[controller]/{id:int}")]
        public async Task<IActionResult> Department([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

	        var department = await _context.Departments.FindAsync(id);
            if (department == null)
            {
                return NotFound();
            }

            return Ok(department);
        }

        // PUT: api/Departments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartment([FromRoute] int id, [FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != department.DepartmentID)
            {
                return BadRequest();
            }

            _context.Entry(department).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentExists(id))
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

        // POST: api/Departments
        [HttpPost]
        public async Task<IActionResult> PostDepartment([FromBody] Department department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Departments.Add(department);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartment", new { id = department.DepartmentID }, department);
        }

        // DELETE: api/Departments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartment([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var department = await _context.Departments.SingleOrDefaultAsync(m => m.DepartmentID == id);
            if (department == null)
            {
                return NotFound();
            }

            _context.Departments.Remove(department);
            await _context.SaveChangesAsync();

            return Ok(department);
        }

        private bool DepartmentExists(int id)
        {
            return _context.Departments.Any(e => e.DepartmentID == id);
        }
    }
}