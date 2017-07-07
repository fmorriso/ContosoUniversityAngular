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

	enrollmentDateCounts: Observable<StudentCountByEnrollmentDateView[]>;

	private gridView: GridDataResult;
	gridData: any[] = []; // example uses private products: any[] = products

	public state: State = {
		skip: 0,
		take: 5
	};
	private sort: SortDescriptor[] = [];

	// http://www.telerik.com/kendo-angular-ui/components/grid/sorting/
	constructor(private service: AboutService) { }

	ngOnInit() {
		console.log(`${this.compName} - ngOnInit - 1`);
		this.getEnrollmentDateCounts();
		this.getGridData();
		console.log(`${this.compName} - ngOnInit - 2`);
	}

	getEnrollmentDateCounts() {
		console.log(`${this.compName} - getCountByEnrollmentDate - 1`);
		this.enrollmentDateCounts = this.service.getCountByEnrollmentDate();
		console.log(`${this.compName} - getCountByEnrollmentDate - 2`);
	}

	private getGridData() {
		console.log(`${this.compName} - getGridData - 1`);
		this.service.getGridData()
			.subscribe(data => {
				console.log(`${this.compName} - getGridData - data=${JSON.stringify(data)}`);
				this.gridData = data as any[];
				this.prepareDuplicateSetOfDataForUseByTheGrid()
			});
	}

	protected sortChange(sort: SortDescriptor[]): void {
		console.log(`${this.compName} - sortChange`);
		this.sort = sort;
		//this.getEnrollmentDateCounts();
		this.prepareDuplicateSetOfDataForUseByTheGrid();
	}

	private prepareDuplicateSetOfDataForUseByTheGrid(): void {
		console.log(`${this.compName} - prepareDuplicateSetOfDataForUseByTheGrid`);
		//let localData: any[] = [];
		// strange work-around to prevent error in Kendo Grid caused by its inability to directly bind to
		// what we really need it to bind too: Observable<StudentCountByEnrollmentDateView[]>
		//this.enrollmentDateCounts.subscribe(data => localData = data as any[]);
		//console.log(`${this.compName} - prepareDuplicateSetOfDataForUseByTheGrid - localData=${JSON.stringify(localData)}`);
		this.gridView = {
			data: orderBy(this.gridData, this.sort),
			total: this.gridData.length
		};
	}

}
