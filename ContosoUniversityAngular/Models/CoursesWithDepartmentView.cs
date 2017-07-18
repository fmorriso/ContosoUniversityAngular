using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversityAngular.Models
{
	[Table("CoursesWithDepartmentView")]
	public class CoursesWithDepartmentView
    {
		[Key]
		public int CourseID { get; set; }
		public string Title { get; set; }
		public int Credits { get; set; }

	    public decimal Budget { get; set; }

		public string DepartmentName { get; set; }

	}
}
