import { Instructor } from './instructor';
import { Course } from './course';

export class Department {
	departmentID: number;
	name: string;
	budget: number;
	startDate: Date;
	instructorID?: number;
	//rowVersion: any;
	administrator?: Instructor;
	courses?: Array<Course>;
}
