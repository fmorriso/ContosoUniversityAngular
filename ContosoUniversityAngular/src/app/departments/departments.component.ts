import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Department } from '../models/department';
import { DepartmentSummaryView } from '../models/departmentSummaryView';
import { DepartmentsService } from './departments.service';

@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

	private compName: string = 'DepartmentsComponent';
	departments: Observable<DepartmentSummaryView[]>;

	constructor(private departmentsService: DepartmentsService) {
		 console.log(`${this.compName} - constructor`);
	}
	
	ngOnInit() {
		console.log(`${this.compName} - ngOnInit - 1`);
		this.getAllDepartments();
		console.log(`${this.compName} - ngOnInit - 2`);
	}

	getAllDepartments() {
		console.log(`${this.compName} - getDepartments - 1`);
		this.departments = this.departmentsService.getDepartments();
		console.log(`${this.compName} - getDepartments - 2`);
	}

	public getAdministratorName(department: DepartmentSummaryView): string {
		//console.log(`${this.compName} - getAdministratorName - ${JSON.stringify(department)}`);
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
