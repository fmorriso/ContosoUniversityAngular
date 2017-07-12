import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Student } from '../models/student';
import { StudentsService } from './students.service';

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

	private compName: string = 'StudentsComponent';
	students: Observable<Student[]>;

	constructor(private studentsService: StudentsService) {
		console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		//console.log(`${this.compName}- ngOnInit - 1.1');
		this.getStudents();
		console.log(`${this.compName} - ngOnInit - `);
	}

	getStudents() {
		//console.log(`${this.compName}- getStudents - 1`);
		this.students = this.studentsService.getStudents();
		console.log(`${this.compName} - getStudents - 2`);
	}
}
