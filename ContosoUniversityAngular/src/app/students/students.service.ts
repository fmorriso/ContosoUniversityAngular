import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Student } from '../models/student';

@Injectable()
export class StudentsService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/students';  // URL to web api

	constructor(private http: Http) { }

	getStudents(): Observable<Student[]> {
		const url: string = `${this.relativeUrl}/list`
		console.log(`StudentsService -  getStudents - ${url}`);
		return <Observable<Student[]>>this.http
			.get(url)
			.map((res: Response) => this.extractDataExtended<Student[]>(res))
			.do(data => console.log(`StudentsService -  getStudents - data = ${JSON.stringify(data)}`))
			;
	}

	private extractDataExtended<T>(res: Response) {
		console.log(`StudentService - extractDataExtended - Response.status=${res.status}`);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		const body = res.json ? res.json() : null;
		console.log(`StudentService - extractDataExtended - Response.body=${body}`);
		return <T>(body || {});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
