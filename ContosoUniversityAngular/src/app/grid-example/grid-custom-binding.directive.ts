import { Directive, OnInit, OnDestroy } from '@angular/core';
import { DataBindingDirective, GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { Subscription } from 'rxjs/Subscription';

import { ToastrService, ToastrConfig } from 'ngx-toastr';

import { GridExampleService } from './grid-example.service';
import { SpinnerService } from '../spinner.service';

@Directive({
	selector: '[app-grid-custom-binding]'
})
export class GridCustomBindingDirective extends DataBindingDirective implements OnInit, OnDestroy {

	private serviceSubscription: Subscription;
	private readonly compName: string = 'GridCustomBindingDirective';
	private readonly freezeToast: ToastrConfig = {
		closeButton: true,
		timeOut: 0
	};

	constructor(private service: GridExampleService,
		        grid: GridComponent,
		        private toastr: ToastrService) {
		super(grid);
		Promise.resolve(null).then(() => this.toastr.info(`constructor`, this.compName));
	}

	public ngOnInit(): void {
		Promise.resolve(null).then(() => this.toastr.info(`ngOnInit`, this.compName));
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
		Promise.resolve(null).then(() => this.toastr.info(`rebind - state=${JSON.stringify(this.state)}`, this.compName));
		this.service.query(this.state);
	}

}
