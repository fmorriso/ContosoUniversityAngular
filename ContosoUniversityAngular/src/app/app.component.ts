import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


	title = 'Contoso University - Angular';

	constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	ngOnInit() {
		
		this.toastr.info('AppComponent', 'Hello', { positionClass: 'toast-bottom-left' });
	}
}
