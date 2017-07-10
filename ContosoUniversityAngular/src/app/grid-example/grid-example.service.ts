/*
ERROR in Can't resolve all parameters for GridExampleService in C:/projects/ContosoUniversityAngular/ContosoUniversityAngular/src/app/grid-example/grid-example.service.ts: ([object Object], ?).
ERROR in ./src/main.ts
Module not found: Error: Can't resolve './$$_gendir/app/app.module.ngfactory' in 'C:\projects\ContosoUniversityAngular\ContosoUniversityAngular\src'
 @ ./src/main.ts 3:0-74
 @ multi ./src/main.ts
Child html-webpack-plugin for "index.html":
*/
import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { State } from '@progress/kendo-data-query';
import { SpinnerService } from "app/spinner.service";

//import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';
// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/automatic-operations/
@Injectable()
export class GridExampleService extends BehaviorSubject<GridDataResult> implements OnInit {

	private compName: string = 'GridExampleService';
	private BASE_URL: string = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
	private tableName: string;

	constructor(private http: Http,
		        private spinnerService: SpinnerService) {
		super(null);
		this.tableName = 'Products';
		console.log(`${this.compName} - constructor - isLoading = ${this.spinnerService.isLoading}`);
	}

	//TODO: try to figure out why Angular 4.2.6 never calls this method
	ngOnInit() {
		console.log(`${this.compName} - ngOnInit - top - tableName=${this.tableName}`);
		this.tableName = 'Products';
		console.log(`${this.compName} - ngOnInit - bottom - tableName=${this.tableName}`);
	}

	public query(state: any): void {
		console.log(`${this.compName} - query - state=${JSON.stringify(state)}`);
		console.log(`${this.compName} - query - tableName=${this.tableName}`);
		this.fetch(this.tableName, state)
			.subscribe(x => super.next(x));
	}

	private fetch(tableName: string, state: any): Observable<GridDataResult> {
		console.log(`${this.compName} - query - tableName=${tableName}, state=${JSON.stringify(state)}`);
		const queryStr = `${toODataString(state)}&$count=true`;
		console.log(`${this.compName} - query - queryStr=${queryStr}`);
		
		Promise.resolve(null).then(() => this.spinnerService.isLoading = true);
		
		return this.http
			.get(`${this.BASE_URL}${tableName}?${queryStr}`)
			.map(response => response.json())
			.map(response => (<GridDataResult>{
				data: response.value,
				total: parseInt(response["@odata.count"], 10)
			}))
			.finally(() => {
				console.log(`${this.compName} - query - finally`);
				Promise.resolve(null).then(() => this.spinnerService.isLoading = false);
			});
	}

	public queryForCategory({ CategoryID }: { CategoryID: number }, state?: any): void {
		console.log(`${this.compName} - queryForCategory`);
		this.query(Object.assign({}, state, {
			filter: {
				filters: [{
					field: "CategoryID", operator: "eq", value: CategoryID
				}],
				logic: "and"
			}
		}));
	}

	public queryForProductName(ProductName: string, state?: any): void {
		console.log(`${this.compName} - queryForProductName`);
		this.query(Object.assign({}, state, {
			filter: {
				filters: [{
					field: "ProductName", operator: "contains", value: ProductName
				}],
				logic: "and"
			}
		}));
	}

}
