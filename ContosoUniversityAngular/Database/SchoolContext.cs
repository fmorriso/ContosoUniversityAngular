﻿using Microsoft.EntityFrameworkCore;
using ContosoUniversityAngular.Models;

namespace ContosoUniversityAngular.Database
{
    public class SchoolContext : DbContext
    {
        public SchoolContext(DbContextOptions<SchoolContext> options) : base(options)
        {
			
        }

#if USE_NO_POWERSHELL_CMDLETS
        public SchoolContext()
        {
            // 1. Absolutely REQUIRED to run ef command line tools, which look for a parameterless constructor before running
            // 2. Absolutely FORBIDDEN when running the PowerShell cmdlets – if you leave this in your will get a VERY USELESS error
            // messsage accusing you of not providing a database provider
            // Therefore, Microsoft is FORCING you to choose EITHER the EF commands OR the EF PowerShell cmdlets, but
            // you CANNOT HAVE BOTH !!!
        }
#endif

        public DbSet<Course> Courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Instructor> Instructors { get; set; }
        public DbSet<OfficeAssignment> OfficeAssignments { get; set; }
        public DbSet<CourseAssignment> CourseAssignments { get; set; }
        public DbSet<Person> People { get; set; }
		
		public DbSet<DepartmentSummaryView> DepartmentSummaryView { get; set; }
		public DbSet<StudentCountByEnrollmentDateView> StudentCountByEnrollmentDateView { get; set; }
	    public DbSet<CoursesWithDepartmentView> CoursesWithDepartmentView { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Course>().ToTable("Course");
            modelBuilder.Entity<Enrollment>().ToTable("Enrollment");
            modelBuilder.Entity<Student>().ToTable("Student");
            modelBuilder.Entity<Department>().ToTable("Department").HasKey(k => k.DepartmentID);
            modelBuilder.Entity<Instructor>().ToTable("Instructor");
            modelBuilder.Entity<OfficeAssignment>().ToTable("OfficeAssignment");
            modelBuilder.Entity<CourseAssignment>().ToTable("CourseAssignment");
            modelBuilder.Entity<Person>().ToTable("Person");

            modelBuilder.Entity<CourseAssignment>()
                .HasKey(c => new { c.CourseID, c.InstructorID });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
			//optionsBuilder.ReplaceService<>()
            base.OnConfiguring(optionsBuilder);
            //TODO: optionsBuilder.UseLoggerFactory(_loggerFactory);
        }
    }
}
