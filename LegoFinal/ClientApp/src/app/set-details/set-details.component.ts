import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Results } from '../Models/LegoResponse';
import { TestService } from '../test.service';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent implements OnInit {

  set!: Results;
  baseUrl: string;

  constructor(private testService: TestService, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    this.route.paramMap      .subscribe(params => {        let set_num = params.get('set_num');        console.log(set_num);        this.testService.getSetDetails(set_num, this.baseUrl).subscribe(x =>        {
          this.set = x;          console.log(this.set);        }        );      });

  }

}
