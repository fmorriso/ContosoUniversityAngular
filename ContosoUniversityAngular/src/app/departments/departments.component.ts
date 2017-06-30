import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Department } from '../models/department';
import { DepartmentSummaryView } from '../models/departmentSummaryView';
import { DepartmentsService } from './departments.service';

@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
	/**
	 Microsoft.AspNetCore.Mvc.Internal.ObjectResultExecutor:Information: Executing ObjectResult, writing value Microsoft.AspNetCore.Mvc.ControllerContext.
	 */
	departments: Observable<DepartmentSummaryView[]>;

	constructor(private departmentsService: DepartmentsService) {
		 console.log('DepartmentsComponent - constructor');
	}
	
	ngOnInit() {
		console.log('DepartmentsComponent - ngOnInit - 1');
		this.getAllDepartments();
		console.log('DepartmentsComponent - ngOnInit - 2');
	}

	getAllDepartments() {
		console.log('DepartmentsComponent - getDepartments - 1');
		this.departments = this.departmentsService.getDepartments();
		console.log('DepartmentsComponent - getDepartments - 2');
	}

	public getAdministratorName(department: DepartmentSummaryView): string {
		console.log(`DepartmentsComponent - getAdministratorName - ${JSON.stringify(department)}`);
		if (department) {
			if (department.lastName) {
				if (department.firstName) {
					return `${department.lastName}, ${department.firstName}`;
				}
			}
		}
		return '(none)';
	}
}
