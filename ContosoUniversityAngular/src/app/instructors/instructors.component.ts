import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Instructor } from '../models/instructor';
import { InstructorsService } from './instructors.service';

@Component({
	selector: 'app-instructors',
	templateUrl: './instructors.component.html',
	styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
	private compName: string = 'InstructorsComponent';
	instructors: Observable<Instructor[]>;

	constructor(public instructorsService: InstructorsService) {
		console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		console.log(`${this.compName} - ngOnInit - 1`);
		this.getInstructors();
		console.log(`${this.compName} - ngOnInit - 2`);
	}

	getInstructors() {
		console.log(`${this.compName} - getInstructors - 1`);
		this.instructors = this.instructorsService.getInstructors();
		console.log(`${this.compName} - getInstructors - 2`);
	}

	public getOfficeLocation(instructor: Instructor): string {
		console.log(`${this.compName} - getOfficeLocation - ${JSON.stringify(instructor)}`);
		if (instructor) {
			if (instructor.officeAssignment) {
				if (instructor.officeAssignment.location) {
					return instructor.officeAssignment.location;
				}
			}
		}
		return '(none)';
	}
}
