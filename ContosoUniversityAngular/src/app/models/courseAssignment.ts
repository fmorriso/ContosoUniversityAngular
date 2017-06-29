import { Instructor } from './instructor';
import { Course }     from './course'

export class CourseAssignment {
  public instructorID: number;
  public courseID: number;
  public instructor: Instructor;
  public course: Course;
}