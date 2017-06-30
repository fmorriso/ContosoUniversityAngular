export class Person {
  public id: number;
  public lastName: string;
  public firstMidName: string;
  public get fullName(): string {
    return `${this.lastName}, ${this.firstMidName}`;
  }
}
