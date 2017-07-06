import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Instructor } from '../models/instructor';

@Injectable()
export class InstructorsService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/instructors';  // URL to web api

	constructor(private http: Http) {
		console.log('InstructorsService - constructor');
	}

	public getInstructors(): Observable<Instructor[]> {
		const url: string = `${this.relativeUrl}/list`
		console.log(`InstructorsService -  getDepartments - ${url}`);
		return <Observable<Instructor[]>>this.http
			.get(url)
			.map((res: Response) => this.extractDataExtended<Instructor[]>(res))
			.do(data => console.log(`InstructorsService - getInstructors - data = ${JSON.stringify(data)}`))
			;
	}

	private extractDataExtended<T>(res: Response) {
		//console.log(`InstructorsService - extractDataExtended - Response.status=${res.status}`);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		const body = res.json ? res.json() : null;
		console.log(`InstructorsService - extractDataExtended - Response.body=${body}`);
		return <T>(body || {});
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
