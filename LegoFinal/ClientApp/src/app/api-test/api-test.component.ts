import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LegoResponse, Results } from '../Models/LegoResponse';
import { PartsResult } from '../Models/PartsResponse';
import { PartsService } from '../parts.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  constructor(private testService: TestService, private partsService: PartsService, private route: ActivatedRoute, private router: Router) { }

  results!: LegoResponse;
  sets!: Results[];
  parts!: PartsResult;
  setDetails!: Results;

  ngOnInit() {
    const setId = this.route.snapshot.paramMap.get('set_num');
    this.testService.getSetResults()
      .subscribe(result => {
        this.results = result;
        this.sets = result.results;
        //setId = result.results.forEach(x => x.set_num = setId);
      });
    this.testService.getSetDetails(setId).subscribe(result => this.setDetails = result);
    //this.partsService.getPartResults(setId).subscribe(result => this.parts = result);
    //this.testService.getPartResults(id).subscribe(partResult => { this.parts = partResult.results });

    //let setId;
    //this.route.paramMap
    //  .subscribe(params => {
    //    let id = Number(params.get('set_num'));
    //    this.testService.getSetResults().subscribe(result => {
    //        this.sets = result.results;
    //        setId = result.results.forEach(y => y.set_num = setId);
    //      this.partsService.getPartResults().subscribe(result => {
    //        this.parts = result.results;
    //        })
    //      })
    //  })
    //}
  }

  //displaySetDetails(setNum: string) {
  //  this.router.navigate(['set-details', setNum]);
  //}
  //searchLegoResponse(userInput: string) {
  //  console.log(userInput);
  //}
}
