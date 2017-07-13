using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversityAngular.Models
{
	[Table("StudentCountByEnrollmentDateView")]
	public class StudentCountByEnrollmentDateView : BaseEntity
    {
		[Key]
		public DateTime EnrollmentDate { get; set; }
		public int StudentCount { get; set; }
    }
}
