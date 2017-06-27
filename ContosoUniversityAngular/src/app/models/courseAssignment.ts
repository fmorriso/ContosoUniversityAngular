import { Instructor } from './instructor';
import { Course }     from './course'

export class CourseAssignment {
  public InstructorID: number;
  public CourseID: number;
  public Instructor: Instructor;
  public Course: Course;
}