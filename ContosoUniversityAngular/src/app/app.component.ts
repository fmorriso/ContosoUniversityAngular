import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	title = 'Contoso University - Angular';

	// NOTE: the SpinnerService must be public because ng build --prod complains if it is private.
	//       At least that is the case with Angular 4.2.6 and Angular-CLI 1.2.0 as of mid-July 2017.
	constructor(private router: Router,
		public spinnerService: SpinnerService) {

		router.events
			.subscribe((routerEvent: Event) => {
				this.checkRouterEvent(routerEvent)
			});
	}

	ngOnInit() { }

	get isLoading() {
		return this.spinnerService.isLoading;
	}

	set isLoading(value: boolean) {
		this.spinnerService.isLoading = value;
	}

	private checkRouterEvent(routerEvent: Event): void {
		if (routerEvent instanceof NavigationStart) {
			this.spinnerService.isLoading = true;
		}

		if (routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationCancel ||
			routerEvent instanceof NavigationError) {
			this.spinnerService.isLoading = false;
		}
	}
}
