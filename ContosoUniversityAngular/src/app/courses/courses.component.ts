import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Course } from '../models/course';
import { CoursesService } from './courses.service';
import { Department } from "app/models/department";

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	courses: Observable<Course[]>;

	constructor(private coursesService: CoursesService) { console.log('CoursesComponent - constructor'); }

	ngOnInit() {
		console.log('CoursesComponent - ngOnInit - 1');
		this.getCourses();
		console.log('CoursesComponent - ngOnInit - 2');
	}

	getCourses() {
		console.log('CoursesComponent - getInstructors - 1');
		this.courses = this.coursesService.getCourses();
		console.log('CoursesComponent - getInstructors - 2');
	}

	public getDepartmentName(course: Course): string {
		console.log(`CoursesComponent - getDepartmentName - ${JSON.stringify(course)}`);
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
