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
			//this.spinnerService.isLoading = true;
		}

		if (routerEvent instanceof NavigationEnd ||
			routerEvent instanceof NavigationCancel ||
			routerEvent instanceof NavigationError) {
			//this.spinnerService.isLoading = false;
		}
	}
}
