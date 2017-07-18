import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

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

import { Course } from '../models/course';

// http://www.telerik.com/kendo-angular-ui/components/dataquery/mvc-integration/
@Injectable()
export class CoursesService {

	private readonly compName: string = 'CoursesService';
	private readonly relativeUrl: string = 'api/courses';  // URL to web api

	constructor(private http: Http,
		private spinnerService: SpinnerService,
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
		
		return this.http
			.get(url)
			.map((response: Response) => response.json())
			.map(({ data, total }) => {
				console.log(`${this.compName} - second map - data=${JSON.stringify(data)}`);
				// Promise.resolve(null).then(() => this.toastr.info(`second map - data=${JSON.stringify(data)}`, this.compName));
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


	/*
		[HttpGet("api/[controller]/[action]")]
		public IEnumerable<Course> List()
	*/
	getCourses(): Observable<Course[]> {
		const url: string = `${this.relativeUrl}/list`
		console.log(`CoursesService -  getCourses - ${url}`);
		return <Observable<Course[]>>this.http
			.get(url)
			.map((res: Response) => this.extractDataExtended<Course[]>(res))
			.do(data => console.log(`CoursesService -  getCourses - data = ${JSON.stringify(data)}`))
			;
	}

	/*
		HttpGet("api/[controller]/[action]/{id:int}")]
		public async Task<IActionResult> Course([FromRoute] int id)
	    http://localhost:4200/api/courses/course/4041
	*/
	getCourse(id: number): Observable<Course> {
		const url: string = `${this.relativeUrl}/course/${id}`
		console.log(`CoursesService -  getCourse - ${url}`);
		return <Observable<Course>>this.http
			.get(url)
			.map((res: Response) => this.extractDataExtended<Course>(res))
			.do(data => console.log(`CoursesService -  getCourse - data = ${JSON.stringify(data)}`))
			;
	}

	private extractDataExtended<T>(res: Response) {
		console.log(`CoursesService - extractDataExtended - Response.status=${res.status}`);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		const body = res.json ? res.json() : null;
		console.log(`CoursesService - extractDataExtended - Response.body=${body}`);
		return <T>(body || {});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
