import { Instructor } from './instructor';
import { Course } from './course';
import { Enrollment } from './enrollment';

export class InstructorIndexData {
  Instructors: Array<Instructor>;
  Courses: Array<Course>;
  Enrollments: Array<Enrollment>;
}