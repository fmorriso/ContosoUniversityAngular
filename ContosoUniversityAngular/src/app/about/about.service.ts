import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Injectable()
export class AboutService {

	private compName: string = 'AboutService';
	private headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/about';  // URL to web api

	constructor(private http: Http) {
		console.log('AboutService - constructor');
	}

	// http://www.telerik.com/kendo-angular-ui/components/grid/sorting/
	getGridData() {
		const url: string = `${this.relativeUrl}/summary`
		console.log(`${this.compName} -  getGridData - ${url}`);
		return this.http
			.get(url)
			.map((res: Response) => this.extractDataExtended<any[]>(res))
			.do(data => console.log(`${this.compName} -  getGridData - data = ${JSON.stringify(data)}`))
			;
	}

	getCountByEnrollmentDate(): Observable<StudentCountByEnrollmentDateView[]> {
		const url: string = `${this.relativeUrl}/summary`
		console.log(`${this.compName} -  getCountByEnrollmentDate - ${url}`);
		return <Observable<StudentCountByEnrollmentDateView[]>>this.http
			.get(url)
			.map((res: Response) => this.extractDataExtended<StudentCountByEnrollmentDateView[]>(res))
			.do(data => console.log(`${this.compName} -  getCountByEnrollmentDate - data = ${JSON.stringify(data)}`))
			;
	}

	private extractDataExtended<T>(res: Response) {
		console.log(`${this.compName} - extractDataExtended - Response.status=${res.status}`);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		const body = res.json ? res.json() : null;
		console.log(`${this.compName} - extractDataExtended - Response.body=${body}`);
		return <T>(body || {});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
