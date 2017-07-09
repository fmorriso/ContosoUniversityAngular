import { Directive, OnInit, OnDestroy } from '@angular/core';
import { DataBindingDirective, GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { AboutService } from 'app/about/about.service';

@Directive({
	selector: '[aboutGridDataBinding]'
})
export class AboutGridDataBindingDirective extends DataBindingDirective implements OnInit, OnDestroy {

	private compName: string = 'AboutGridDataBindingDirective';
	private serviceSubscription: Subscription;

	constructor(private service: AboutService, grid: GridComponent) {
		super(grid);
		console.log(`${this.compName} - constructor`);
	}
	// http://www.telerik.com/kendo-angular-ui/components/grid/data-binding/automatic-operations/
	// Custom Remote Directives
	/* Example:
	public ngOnInit(): void {
		this.serviceSubscription = this.products.subscribe((result) => {
			this.grid.data = result;
		});

		super.ngOnInit(); // do not forget to call the base implementation
		this.rebind();
	}
	*/
	public ngOnInit(): void {
		console.log(`${this.compName} - ngOnInit`);
		let localResult: GridDataResult;
		//TODO: figure out why the returned GridDataResult is always{"data": {}, "total": 0}
		//TODO: maybe this subscribe needs its 3 parts???
		//TODO: maybe call the service a different way ???
		this.serviceSubscription = this.service.subscribe(
			result => {
				// ISSUE: the following console.log always reports: {"data": {}, "total": 0}
				console.log(`${this.compName} - 1 - result=${JSON.stringify(result)}`);
				this.grid.data = result;
			}
		);

		super.ngOnInit();
		this.rebind();
	}

	public ngOnDestroy(): void {
		console.log(`${this.compName} - ngOnDestroy`);
		if (this.serviceSubscription) {
			this.serviceSubscription.unsubscribe();
		}

		super.ngOnDestroy();
	}

	public rebind(): void {
		console.log(`${this.compName} - rebind - before query`);
		this.service.query(this.state);
		console.log(`${this.compName} - rebind - after query`);
	}
}
