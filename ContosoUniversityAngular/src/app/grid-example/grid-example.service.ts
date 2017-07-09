import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';

import { StudentCountByEnrollmentDateView } from '../models/StudentCountByEnrollmentDateView';

@Injectable()
export class GridExampleService {

  constructor() { }

}
