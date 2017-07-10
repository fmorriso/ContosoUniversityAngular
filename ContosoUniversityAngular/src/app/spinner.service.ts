import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

	private compName: string = 'SpinnerService';
	private _loading: boolean;

	constructor() {
		this._loading = false;
		console.log(`${this.compName} - constructor - isLoading=${this._loading}`);
	}

	get isLoading() {
		return this._loading;
	}

	set isLoading(value: boolean) {
		console.log(`${this.compName} - isLoading changing from ${this._loading} to ${value}`);
		this._loading = value;
	}
}
