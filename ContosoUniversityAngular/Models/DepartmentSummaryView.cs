using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversityAngular.Models
{

	[Table("DepartmentSummaryView")]
	public class DepartmentSummaryView
    {
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
	    public decimal Budget { get; set; }
	    public DateTime StartDate { get; set; }
	    public string AdministratorLastName { get; set; }
	    public string AdministratorFirstName { get; set; }
		public DateTime AdministratorHireDate { get; set; }
	}
}
