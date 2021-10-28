import { Component, OnInit } from '@angular/core';
import { LegoResponse, Results } from '../Models/LegoResponse';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  constructor() { }

  sets!: Results[];

  ngOnInit() {
  this.sets = this.
  }

}
