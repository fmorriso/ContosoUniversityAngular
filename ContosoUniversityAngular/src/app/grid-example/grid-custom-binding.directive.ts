import { Directive, OnInit, OnDestroy } from '@angular/core';
import { DataBindingDirective, GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { Subscription } from 'rxjs/Subscription';

import { GridExampleService } from './grid-example.service';
import { SpinnerService } from '../spinner.service';

@Directive({
	selector: '[gridCustomBinding]'
})
export class GridCustomBindingDirective extends DataBindingDirective implements OnInit, OnDestroy {

	private serviceSubscription: Subscription;
	private compName: string = 'GridCustomBindingDirective';

	constructor(private service: GridExampleService,
		grid: GridComponent,
	    private spinnerService: SpinnerService) {
		super(grid);
		console.log(`${this.compName} - constructor`);
	}

	public ngOnInit(): void {
		console.log(`${this.compName} - ngOnInit`);
		this.serviceSubscription = this.service.subscribe((result: GridDataResult) => {
			this.grid.data = result;
		});
		super.ngOnInit();
		this.rebind();
	}

	public ngOnDestroy(): void {
		if (this.serviceSubscription) {
			this.serviceSubscription.unsubscribe();
		}
		super.ngOnDestroy();
	}

	public rebind(): void {
		console.log(`${this.compName} - rebind - state=${JSON.stringify(this.state)}`);
		this.service.query(this.state);
	}

}
