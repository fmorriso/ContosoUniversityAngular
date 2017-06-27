import { Enrollment }       from './enrollment';
import { CourseAssignment } from './courseAssignment';
import { Department }       from './department';

export class Course {
  /*[DatabaseGenerated(DatabaseGeneratedOption.None)]
[Display(Name = "Number")]*/
  public CourseID: number;
  /*[StringLength(50, MinimumLength = 3)]*/
  public Title: string;
  /*[Range(0, 5)]*/
  public Credits: number;
  public DepartmentID: number;
  public Department: Department;
  public Enrollments: Array<Enrollment>;
  public CourseAssignments: Array<CourseAssignment>;
}