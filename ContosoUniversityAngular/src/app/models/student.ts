import { Person }     from './person';
import { Enrollment } from './enrollment';

export class Student extends Person {
  /*[DataType(DataType.Date)]
[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
[Display(Name = "Enrollment Date")]*/
  public EnrollmentDate: Date;
  public Enrollments: Array<Enrollment>;
}
