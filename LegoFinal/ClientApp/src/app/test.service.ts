import { Injectable } from '@angular/core';
import { LegoResponse, Results } from './Models/LegoResponse';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  sets!: Results[];

  constructor(private legoResponse: LegoResponse, private results: Results) { }

  getResults(): Results[] {
    return  
  }
}
