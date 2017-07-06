import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AboutService } from './about.service';
import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	enrollmentDateCounts: Observable<StudentCountByEnrollmentDateView[]>

	constructor(public aboutService: AboutService) {}

	ngOnInit() {
		console.log('AboutComponent - ngOnInit - 1');
		this.getEnrollmentDateCounts();
		console.log('AboutComponent - ngOnInit - 2');
	}

	getEnrollmentDateCounts() {
		console.log('AboutComponent - getCountByEnrollmentDate - 1');
		this.enrollmentDateCounts = this.aboutService.getCountByEnrollmentDate();
		console.log('AboutComponent - getCountByEnrollmentDate - 2');
	}

}
