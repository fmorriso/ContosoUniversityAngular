import { CourseAssignment } from './courseAssignment';
import { OfficeAssignment } from './officeAssignment';
import { Person } from './person';

export class Instructor extends Person {

	public hireDate: Date;
	public courseAssignments?: Array<CourseAssignment>;
	public officeAssignment?: OfficeAssignment;

	constructor() {
		super();
		//console.log('Instructor - constructor called');
	}

}
