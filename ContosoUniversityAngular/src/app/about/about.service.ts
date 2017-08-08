import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
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

import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

// http://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/
@Injectable()
export class AboutService {
	
	private readonly compName: string = 'AboutService';
	private readonly relativeUrl: string = 'api/about';  // URL to web api

	constructor(private http: Http,
		private spinnerService: SpinnerService,
		private toastr: ToastrService) {
		console.log(`${this.compName} - constructor - isLoading = ${this.spinnerService.isLoading}`);
	}

	public fetch(state: DataSourceRequestState): Observable<DataResult> {

		const queryStr = `${toDataSourceRequestString(state)}`;
		const hasGroups = state.group && state.group.length;
		const url: string = `${this.relativeUrl}/summary?${queryStr}`;
		console.log(`${this.compName} - fetch - url=${url}, state=${JSON.stringify(state)}`);

		// turn on the spinner
		Promise.resolve(null).then(() => this.spinnerService.isLoading = true);

		// The HTTP GET will return a JSON reprepsentation of an instance of
		// Progress Telerik DataSourceResult
		// Example of what we expect:
		/*
		{
			"data": [
				{
					"enrollmentDate": "2005-09-01T00:00:00",
					"studentCount": 1
				},
				{
					"enrollmentDate": "2010-09-01T00:00:00",
					"studentCount": 1
				},
				{
					"enrollmentDate": "2011-09-01T00:00:00",
					"studentCount": 1
				},
				{
					"enrollmentDate": "2012-09-01T00:00:00",
					"studentCount": 3
				},
				{
					"enrollmentDate": "2013-09-01T00:00:00",
					"studentCount": 2
				}
			],
			"total": 5,
			"aggregateResults": null,
			"errors": null
		}
		*/
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

	private handleError(error: any): Promise<any> {
		//console.log(`${this.compName} - An error occurred - ${JSON.stringify(error)}`);
		Promise.resolve(null).then(() => this.toastr.error(`handleError - error=${JSON.stringify(error)}`, this.compName));
		return Promise.reject(error.message || error);
	}

}
