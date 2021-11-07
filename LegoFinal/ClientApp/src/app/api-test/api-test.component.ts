import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private testService: TestService, private partsService: PartsService, private route: ActivatedRoute) { }

  sets!: Results[];
  parts!: PartsResult[];

  ngOnInit() {
  //  let setId;
  //  this.testService.getSetResults().subscribe(result => { this.sets = result.results });
  //  this.testService.getPartResults(id).subscribe(partResult => { this.parts = partResult.results });

    let setId;
    this.route.paramMap
      .subscribe(params => {
        let id = Number(params.get('id'));
        this.testService.getSetResults
          .subscribe(result => {
            this.favorites = result.filter(x => x.userId == id);
            setId = result.forEach(y => y.eventId = setId);
            this.eventService.getEvents().subscribe(result => {
              this.events = result.filter(y => y.eventId == setId);
            })
          })
      })
  }

}
