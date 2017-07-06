import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

@Injectable()
export class AboutService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/about';  // URL to web api

	constructor(private http: Http) {
		console.log('AboutService - constructor');
	}

	getCountByEnrollmentDate(): Observable<StudentCountByEnrollmentDateView[]> {
		console.log(`AboutService -  getCountByEnrollmentDate - ${this.relativeUrl}`);
		return <Observable<StudentCountByEnrollmentDateView[]>>this.http
			.get(this.relativeUrl)
			.map((res: Response) => this.extractDataExtended<StudentCountByEnrollmentDateView[]>(res))
			.do(data => console.log(`CoursesService -  getCourses - data = ${JSON.stringify(data)}`))
			;
	}

	private extractDataExtended<T>(res: Response) {
		console.log(`AboutService - extractDataExtended - Response.status=${res.status}`);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		const body = res.json ? res.json() : null;
		console.log(`AboutService - extractDataExtended - Response.body=${body}`);
		return <T>(body || {});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
