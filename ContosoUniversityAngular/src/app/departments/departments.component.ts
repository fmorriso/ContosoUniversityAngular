import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, DataSourceRequestState, DataResult } from "@progress/kendo-data-query";

import { Department } from '../models/department';
import { DepartmentSummaryView } from '../models/departmentSummaryView';
import { DepartmentsService } from './departments.service';
import { ToastrService } from "ngx-toastr";
// http://plnkr.co/edit/x4ZYjgHILXJWi2oI565G?p=preview
@Component({
	selector: 'app-departments',
	templateUrl: './departments.component.html',
	styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

	private compName: string = 'DepartmentsComponent';
	public items: GridDataResult;
	public state: DataSourceRequestState = {
		skip: 0,
		take: 3,
		sort: [{ "dir": "asc", "field": "name" }]
	};

	constructor(private toastr: ToastrService,
		private dataService: DepartmentsService) {
		 console.log(`${this.compName} - constructor`);
	}

	ngOnInit() {
		Promise.resolve(null).then(() => this.toastr.info(`ngOnInit - state=${JSON.stringify(this.state)}`, this.compName));
		//console.log(`${this.compName} - ngOnInit`);
		this.getGridItems();
	}

	public dataStateChange(state: DataStateChangeEvent): void {
		Promise.resolve(null).then(() => this.toastr.info(`dataStateChange - state=${JSON.stringify(state)}`, this.compName));
		console.log(`${this.compName} - dataStateChange - state=${JSON.stringify(state)}`);
		this.state = state;
		this.getGridItems();
	}

	// this method does not seem to be called when using 
	public sortChange(sort: SortDescriptor[]): void {
		console.log(`${this.compName} - sortChange - sort=${JSON.stringify(sort)}`);
		this.state.sort = sort;
		this.getGridItems();
	}

	private getGridItems() {
		this.dataService.fetch(this.state)
			.subscribe((r: DataResult) => {
				//console.log(`${this.compName} - ngOnInit.subscribe - r=${JSON.stringify(r)}`);
				Promise.resolve(null).then(() => this.toastr.info(`ngOnInit.subscribe - r=${JSON.stringify(r)}`, this.compName));
				this.items = <GridDataResult>r;
			});
	}
	
/*	ngOnInit() {
		console.log(`${this.compName} - ngOnInit - 1`);
		this.getAllDepartments();
		console.log(`${this.compName} - ngOnInit - 2`);
	}

	getAllDepartments() {
		console.log(`${this.compName} - getDepartments - 1`);
		this.departments = this.departmentsService.getDepartments();
		console.log(`${this.compName} - getDepartments - 2`);
	}*/

	public onMultiRowGridHeaderClick(e) {
		console.log(`${this.compName} - onMultiRowGridHeaderClick`)
		e.target.closest('a').click();
	}
}
