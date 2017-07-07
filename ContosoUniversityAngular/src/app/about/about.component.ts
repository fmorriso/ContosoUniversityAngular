import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';

import { AboutService } from './about.service';
import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	private compName: string = 'AboutComponent';
	
	gridData: StudentCountByEnrollmentDateView[] = [];
	
	// http://www.telerik.com/kendo-angular-ui/components/grid/sorting/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/automatic-operations/
	constructor(private service: AboutService) {}

	ngOnInit() {
		//console.log(`${this.compName} - ngOnInit - 1`);
		this.getGridData();
		//console.log(`${this.compName} - ngOnInit - 2`);
	}
	
	private getGridData() {
		console.log(`${this.compName} - getGridData - 1`);
		// transform Observable<StudentCountByEnrollmentDateView[]> into a StudentCountByEnrollmentDateView[]
		// because the Kendo UI Grid for Angular cannot bind to an Observable<something[]>.
		this.service.getGridData()
			.subscribe(data => {
				//console.log(`${this.compName} - getGridData - data=${JSON.stringify(data)}`);
				this.gridData = data as StudentCountByEnrollmentDateView[];
			});
	}

}
