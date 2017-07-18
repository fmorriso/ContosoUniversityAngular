import { Enrollment } from './enrollment';
import { CourseAssignment } from './courseAssignment';
import { Department } from './department';

export class Course {
	public courseID: number;
	public title: string;
	public credits: number;
	public DepartmentID: number;
	public department: Department;
	public dnrollments: Array<Enrollment>;
	public courseAssignments: Array<CourseAssignment>;
}
