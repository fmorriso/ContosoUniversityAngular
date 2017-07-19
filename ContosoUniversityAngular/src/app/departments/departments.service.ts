import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { SpinnerService } from 'app/spinner.service';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import {
	toODataString, toDataSourceRequestString,
	translateDataSourceResultGroups, translateAggregateResults,
	DataResult, DataSourceRequestState
	} from '@progress/kendo-data-query';
import { State } from '@progress/kendo-data-query';

import { ToastrService, ToastrConfig } from 'ngx-toastr';

// import { Department } from '../models/department';
import { DepartmentSummaryView } from '../models/departmentSummaryView';


@Injectable()
export class DepartmentsService {

	private readonly compName: string = 'DepartmentsService';
	private readonly relativeUrl = 'api/departments';  // URL to web api

	constructor(private http: Http, private spinnerService: SpinnerService,
		private toastr: ToastrService) {
		console.log(`${this.compName} - constructor - isLoading = ${this.spinnerService.isLoading}`);
	}

	public fetch(state: DataSourceRequestState): Observable<DataResult> {

		const queryStr = `${toDataSourceRequestString(state)}`;
		const hasGroups = state.group && state.group.length;
		const url: string = `${this.relativeUrl}/list?${queryStr}`;
		console.log(`${this.compName} - fetch - url=${url}, state=${JSON.stringify(state)}`);

		// turn on the spinner
		Promise.resolve(null).then(() => this.spinnerService.isLoading = true);

		// The HTTP GET will return a JSON reprepsentation of an instance of
		// Progress Telerik DataSourceResult
		
		return this.http
			.get(url)
			.map((response: Response) => response.json())
			.map(({ data, total }) => {
				//console.log(`${this.compName} - second map - data=${JSON.stringify(data)}`);
				Promise.resolve(null).then(() => this.toastr.info(`second map - data=${JSON.stringify(data)}`, this.compName));
				return (<GridDataResult>{
						data: hasGroups ? translateDataSourceResultGroups(data) : data,
						total: total
						// convert the aggregates if such exists
						//aggregateResult: translateAggregateResults(aggregateResults)
					}
				)
			})
			.catch(this.handleError)
			.finally(() => {
				//console.log(`${this.compName} - fetch - finally`)
				Promise.resolve(null).then(() => this.spinnerService.isLoading = false);
			});
	}


	public getDepartments(): Observable<DepartmentSummaryView[]> {
		const url: string = `${this.relativeUrl}/list`
		console.log(`DepartmentsService -  getDepartments - ${url}`);
		return <Observable<DepartmentSummaryView[]>>this.http
			.get(url)
			.map((response: Response) => response.json() as DepartmentSummaryView[])
			.catch(this.handleError)
			.do(data => console.log(`DepartmentsService - getDepartments.do - data=${JSON.stringify(data)}`))
			;
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || ' error');
	}
}
