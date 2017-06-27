using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;
using ContosoUniversityAngular.Database;

namespace ContosoUniversityAngular.Controllers
{
    public class BaseController : Controller
    {
        protected readonly SchoolContext _context;
        public BaseController(SchoolContext context)
        {
            _context = context;
            _context.GetInfrastructure();
        }
    }
}
