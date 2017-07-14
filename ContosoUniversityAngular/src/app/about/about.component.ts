import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';

import { AboutService } from './about.service';
import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

import 'rxjs/add/operator/switchMap';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	private readonly compName: string = 'AboutComponent';
	
	// http://www.telerik.com/kendo-angular-ui/components/grid/sorting/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/automatic-operations/
	
	constructor(private toastr: ToastrService) {}

	ngOnInit() {
		this.toastr.info('ngOnInit', this.compName);
	}

}
