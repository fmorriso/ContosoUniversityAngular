import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

//import { Department } from '../models/department';
import { DepartmentSummaryView } from '../models/departmentSummaryView';

@Injectable()
export class DepartmentsService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/departments';  // URL to web api

	constructor(private http: Http) {
		console.log('getDepartments - constructor');
	}

	public getDepartments(): Observable<DepartmentSummaryView[]> {
		console.log(`DepartmentsService - getDepartments - ${this.relativeUrl}`);
		return <Observable<DepartmentSummaryView[]>>this.http
			.get(this.relativeUrl)
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
