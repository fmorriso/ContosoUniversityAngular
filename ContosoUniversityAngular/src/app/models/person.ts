export class Person {
  public ID: number;
  /*[Required]
          [StringLength(50)]
          [Display(Name = "Last Name")]*/
  public LastName: string;
  /*[Required]
          [StringLength(50, ErrorMessage = "First name cannot be longer than 50 characters.")]
          [Column("FirstName")]
          [Display(Name = "First Name")]*/
  public FirstMidName: string;
  public get FullName(): string {
    return this.LastName + ", " + this.FirstMidName;
  }
}
