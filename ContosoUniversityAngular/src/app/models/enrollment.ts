import { Grade }   from './grade';
import { Course }  from './course';
import { Student } from './student';

export class Enrollment {
  public EnrollmentID: number;
  public CourseID: number;
  public StudentID: number;
  /*[DisplayFormat(NullDisplayText = "No grade")]*/
  public Grade?: Grade;
  public Course?: Course;
  public Student?: Student;
}
