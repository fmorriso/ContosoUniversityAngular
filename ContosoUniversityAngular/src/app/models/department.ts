import { Instructor } from './instructor';
import { Course }     from './course';

export class Department {
  DepartmentID: number;
  Name: string;
  Budget: number;
  StartDate: Date;
  InstructorID?: number;
  Administrator?: Instructor;
  Courses: Array<Course>;
}