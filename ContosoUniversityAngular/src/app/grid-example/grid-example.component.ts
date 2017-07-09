import { Component, OnInit } from '@angular/core';
import { GridExampleService } from './grid-example.service';

@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.scss']
})
export class GridExampleComponent implements OnInit {

  constructor(private service: GridExampleService) { }

  ngOnInit() {
  }

}
