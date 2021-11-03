import { Component, OnInit } from '@angular/core';
import { LegoResponse, Results } from '../Models/LegoResponse';
import { TestService } from '../test.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  constructor(private testService: TestService) { }

  sets!: Results[];

  ngOnInit() {
    this.testService.getResults().subscribe(result => { this.sets = result; })
  }

}
