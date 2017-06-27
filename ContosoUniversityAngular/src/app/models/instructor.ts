import { CourseAssignment } from './courseAssignment';
import { OfficeAssignment } from './officeAssignment';
import { Person }           from './person';

export class Instructor extends Person {
  /*[DataType(DataType.Date)]
[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
[Display(Name = "Hire Date")]*/
  public HireDate: Date;
  public CourseAssignments?: Array<CourseAssignment>;
  public OfficeAssignment?: OfficeAssignment;
}