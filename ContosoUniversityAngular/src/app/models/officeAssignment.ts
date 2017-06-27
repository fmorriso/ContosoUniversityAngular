import { Instructor } from "app/models/instructor";

export class OfficeAssignment {
  /*[Key]*/
  public InstructorID: number;
  /*[StringLength(50)]
          [Display(Name = "Office Location")]*/
  public Location: string;
  public Instructor: Instructor;
}