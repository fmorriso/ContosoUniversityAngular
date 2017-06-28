import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { Student }           from '../models/student';
import { StudentsService }   from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[];

  constructor(private studentsService: StudentsService) {
    console.log('StudentsComponent - constructor');
  }

  ngOnInit() {
    console.log('StudentsComponent - ngOnInit - 1.1');
    this.getStudents();
    console.log('StudentsComponent - ngOnInit - 2.1');
  }

  getStudents() {
    console.log('StudentsComponent - getStudents - 1');
    this.students = [];
    this.studentsService.getStudents()
      .subscribe( students => {this.students = students} );
    console.log(JSON.stringify(this.students));
    console.log('StudentsComponent - getStudents - 2');
  }
}
