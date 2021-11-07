import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  setName!: string;
  result: string;

  searchLegoSets(userInput: string) {
    //this is where you do the filtering
    //this.result = sets.filter( x= > x == userInput)
    console.log("falcon");
  }

}
