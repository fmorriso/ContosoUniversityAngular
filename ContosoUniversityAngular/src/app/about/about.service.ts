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

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { State } from '@progress/kendo-data-query';

import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';
import { SpinnerService } from 'app/spinner.service';

@Injectable()
export class AboutService extends BehaviorSubject<GridDataResult> {

	private compName: string = 'AboutService';
	private readonly headers = new Headers({ 'Content-Type': 'application/json' });
	private relativeUrl = 'api/about';  // URL to web api

	constructor(private http: Http,
		        private spinnerService: SpinnerService) {
		super(null);
		console.log(`${this.compName} - constructor - isLoading = ${this.spinnerService.isLoading}`);
	}

	public query(state: State): void {
		console.log(`${this.compName} - query - state=${JSON.stringify(state)}`);
		this.fetch(state)
			.subscribe(x => super.next(x));
	}

	private fetch(state: State): Observable<GridDataResult> {
		
		const queryStr = `${toODataString(state)}&$count=true`;
		const url: string = `${this.relativeUrl}/summary?${queryStr}`
		console.log(`${this.compName} - fetch - url=${url}, state=${JSON.stringify(state)}`);

		Promise.resolve(null).then(() => this.spinnerService.isLoading = true);

		// The HTTP GET will return a JSON reprepsentation of an instance of
		// C# class EntityList, which contains the List<BaseEntity> and an
		// int containing TotalItems (totalItems in JSON).
		// Example:
		// gridData={"listOfItems":[{"enrollmentDate":"2005-09-01T00:00:00","studentCount":1},{"enrollmentDate":"2010-09-01T00:00:00","studentCount":1},{"enrollmentDate":"2011-09-01T00:00:00","studentCount":1}],"totalItems":5}
		return this.http
			.get(url)
			.map((response: Response) => {
				if (response.ok) {
					const gridData = response.json();
					console.log(`${this.compName} - ok - gridData=${JSON.stringify(gridData)}`);
					return {
						data: gridData.listOfItems,
						total: gridData.totalItems
					};
				} else {
					console.log(`${this.compName} - response not ok - ${JSON.stringify(response)}`);
					return { data:[], total: 0 }
				}
			})
			.catch(this.handleError)
			.finally(() => {
				console.log(`${this.compName} - fetch - finally`)
				Promise.resolve(null).then(() => this.spinnerService.isLoading = false);
			});
	}

	// http://www.telerik.com/kendo-angular-ui/components/grid/sorting/
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/automatic-operations/
	getGridDataX(): Observable<StudentCountByEnrollmentDateView[]> {
		const url: string = `${this.relativeUrl}/summary`
		console.log(`${this.compName} -  getCountByEnrollmentDate - ${url}`);
		return <Observable<StudentCountByEnrollmentDateView[]>>this.http
			.get(url)
			.map((response: Response) => this.extractData<StudentCountByEnrollmentDateView[]>(response))
			.do(data => console.log(`${this.compName} -  getGridData - data = ${JSON.stringify(data)}`))
			;
	}

	private extractData<T>(res: Response) {
		console.log(`${this.compName} - extractDataExtended - Response.status=${res.status}`);
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}
		const body = res.json ? res.json() : null;
		console.log(`${this.compName} - extractDataExtended - Response.body=${JSON.stringify(body)}`);
		return <T>(body || {});
	}

	private handleError(error: any): Promise<any> {
		console.error(`${this.compName} - An error occurred`, error);
		return Promise.reject(error.message || error);
	}

}
