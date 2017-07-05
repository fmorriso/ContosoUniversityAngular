import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	title = 'Contoso University - Angular';

	constructor() {}

	ngOnInit() {}
}
