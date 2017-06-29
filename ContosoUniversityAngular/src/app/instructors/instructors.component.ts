import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Instructor } from '../models/instructor';
import { InstructorsService } from './instructors.service';

@Component({
	selector: 'app-instructors',
	templateUrl: './instructors.component.html',
	styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

	instructors: Observable<Instructor[]>;

	constructor(private instructorsService: InstructorsService) { console.log('InstructorsComponent - constructor'); }

	ngOnInit() {
		console.log('InstructorsComponent - ngOnInit - 1');
		this.getInstructors();
		console.log('InstructorsComponent - ngOnInit - 2');
	}

	getInstructors() {
		console.log('InstructorsComponent - getInstructors - 1');
		this.instructors = this.instructorsService.getInstructors();
		console.log('InstructorsComponent - getInstructors - 2');
	}
}
