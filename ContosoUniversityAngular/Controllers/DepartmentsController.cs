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
    [Route("api/Departments")]
    public class DepartmentsController : BaseController
    {
        public DepartmentsController(SchoolContext context): base(context)
        {}

		// GET: api/Departments
#if GET_ASYNC
		[HttpGet]
		public async Task<IEnumerable<Department>> GetDepartmentsAsync()
		{
			return await _context.Departments
								 //.Include(d => d.Administrator)
								 //.Include(c => c.Courses)
								 .OrderBy(column => column.Name)
								 .AsNoTracking()
								 .ToListAsync();
		} 
#endif

		[HttpGet]
	    public async Task<IEnumerable<DepartmentSummaryView>> GetDepartments()
	    {
		    return await _context.DepartmentSummaryView
			                     .OrderBy(column => column.Name)
			                     .AsNoTracking()
			                     .ToListAsync();
	    }

		// GET: api/Departments/5
		[HttpGet("{id}")]
        public async Task<IActionResult> GetDepartment([FromRoute] int id)
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