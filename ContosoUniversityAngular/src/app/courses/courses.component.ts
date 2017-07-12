import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Course } from '../models/course';
import { CoursesService } from './courses.service';
import { Department } from "app/models/department";

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

	compName: string = 'CoursesComponent';
	courses: Observable<Course[]>;
	
	constructor(public coursesService: CoursesService) {
		 console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		console.log(`${this.compName} - ngOnInit - 1`);
		this.getCourses();
		console.log(`${this.compName} - ngOnInit - 2`);
	}

	getCourses() {
		console.log(`${this.compName} - getCourses - 1`);
		this.courses = this.coursesService.getCourses();
		console.log(`${this.compName} - getCourses - courses=${JSON.stringify(this.courses)}`);
	}

	getDepartmentName(course: Course): string {
		//console.log(`${this.compName} - getDepartmentName - ${JSON.stringify(course)}`);
		if (course) {
			if (course.department) {
				if (course.department.name) {
					return course.department.name;
				}
			}
		}
		return '(none)';
	}

}
