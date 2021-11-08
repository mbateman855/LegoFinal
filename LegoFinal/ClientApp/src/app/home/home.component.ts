import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  setName!: string;
  result: string;

  searchLegoResponse(userInput: string) {
    //this is where you do the filtering
    //this.result = sets.filter( x= > x == userInput)
    console.log("userInput");
  }

}



//you add below for testing on sunday 11-7-21 @ 1753 ALR';
