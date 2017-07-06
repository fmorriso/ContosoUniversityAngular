import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Course } from '../models/course';

@Injectable()
export class CoursesService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/courses';  // URL to web api

	constructor(private http: Http) {
		console.log('CoursesService - constructor');
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
