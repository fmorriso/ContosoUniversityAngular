import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { ToastrService, ToastrConfig } from 'ngx-toastr';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { DataSourceRequestState, DataResult } from '@progress/kendo-data-query'; 

import { AboutService } from './about.service';
import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	private readonly compName: string = 'AboutComponent';

	public items: GridDataResult;
	public state: DataSourceRequestState = {
		skip: 0,
		take: 3
	};

	// http://www.telerik.com/kendo-angular-ui/components/grid/sorting/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/automatic-operations/
	// http://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/

	constructor(private toastr: ToastrService,
		        private dataService: AboutService) { }

	ngOnInit() {
		Promise.resolve(null).then(() => this.toastr.info(`ngOnInit - state=${this.state}`, this.compName));
		//console.log(`${this.compName} - ngOnInit`);
		this.dataService.fetch(this.state)
			.subscribe((r: DataResult) => {
				//console.log(`${this.compName} - ngOnInit.subscribe - r=${JSON.stringify(r)}`);
				Promise.resolve(null).then(() => this.toastr.info(`ngOnInit.subscribe - r=${JSON.stringify(r)}`, this.compName));
				this.items = <GridDataResult> r;
			});
	}

	public dataStateChange(state: DataStateChangeEvent): void {
		Promise.resolve(null).then(() => this.toastr.info(`dataStateChange - state=${JSON.stringify(state)}`, this.compName));
		//console.log(`${this.compName} - dataStateChange - state=${JSON.stringify(state)}`);
		this.state = state;
		this.dataService.fetch(state)
			.subscribe((r: DataResult) => {
				console.log(`${this.compName} - dataStateChange.subscribe - r=${JSON.stringify(r)}`);
				this.items = <GridDataResult> r;
			});
	}

}
