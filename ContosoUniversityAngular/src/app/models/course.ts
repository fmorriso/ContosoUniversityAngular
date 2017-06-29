import { Enrollment }       from './enrollment';
import { CourseAssignment } from './courseAssignment';
import { Department }       from './department';

export class Course {
  /*[DatabaseGenerated(DatabaseGeneratedOption.None)]
[Display(Name = "Number")]*/
  public courseID: number;
  /*[StringLength(50, MinimumLength = 3)]*/
  public title: string;
  /*[Range(0, 5)]*/
  public credits: number;
  public DepartmentID: number;
  public department: Department;
  public dnrollments: Array<Enrollment>;
  public courseAssignments: Array<CourseAssignment>;
}