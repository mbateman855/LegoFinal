import { Component, OnInit } from '@angular/core';
import { Results } from '../Models/LegoResponse';
import { TestService } from '../test.service';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent implements OnInit {

  set!: Results;
  constructor(private testService: TestService) { }

  ngOnInit() {

  }

}
