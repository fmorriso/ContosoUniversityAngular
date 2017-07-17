import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ToastrService, ToastrConfig } from 'ngx-toastr';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DataSourceRequestState, DataResult } from '@progress/kendo-data-query'; 

import { Course } from '../models/course';
import { CoursesService } from './courses.service';
import { Department } from '../models/department';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

	compName: string = 'CoursesComponent';
	courses: Observable<Course[]>;

	public items: GridDataResult;
	public state: DataSourceRequestState = {
		skip: 0,
		take: 3
	};
	
	constructor(private dataService: CoursesService,
		
		private toastr: ToastrService) {
		 console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		Promise.resolve(null).then(() => this.toastr.info(`ngOnInit - state=${this.state}`, this.compName));
		//console.log(`${this.compName} - ngOnInit`);
		this.dataService.fetch(this.state)
			.subscribe((r: DataResult) => {
				//console.log(`${this.compName} - ngOnInit.subscribe - r=${JSON.stringify(r)}`);
				Promise.resolve(null).then(() => this.toastr.info(`ngOnInit.subscribe - r=${JSON.stringify(r)}`, this.compName));
				this.items = <GridDataResult>r;
			});
	}

	public dataStateChange(state: DataStateChangeEvent): void {
		Promise.resolve(null).then(() => this.toastr.info(`dataStateChange - state=${JSON.stringify(state)}`, this.compName));
		//console.log(`${this.compName} - dataStateChange - state=${JSON.stringify(state)}`);
		this.state = state;
		this.dataService.fetch(state)
			.subscribe((r: DataResult) => {
				console.log(`${this.compName} - dataStateChange.subscribe - r=${JSON.stringify(r)}`);
				this.items = <GridDataResult>r;
			});
	}

	getCourses() {
		console.log(`${this.compName} - getCourses - 1`);
		this.courses = this.dataService.getCourses();
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
