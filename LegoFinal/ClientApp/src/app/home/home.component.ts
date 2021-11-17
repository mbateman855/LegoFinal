import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegoResponse, Results } from '../Models/LegoResponse';
import { TestService } from '../test.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  setName!: string;
  result: string;
  userInput: string;
  baseUrl: string;

  constructor(private testService: TestService, private route: ActivatedRoute, private router: Router, @Inject('BASE_URL') baseUrl: string) { this.baseUrl = baseUrl;}

  results!: LegoResponse;
  sets!: Results[];
  filteredSets!: Results[];


  ngOnInit() {
    this.testService.getSetResults(this.baseUrl)
      .subscribe(result => {
        this.results = result;
        this.sets = result.results;
        console.log(this.sets);

      });
  }

  searchLegoResponse(userInput) {
   //location.replace("set_url")
    this.filteredSets = this.sets.filter(set => set.name.toLowerCase().includes(userInput.toLowerCase()));
    console.log(this.filteredSets);
  }
}



