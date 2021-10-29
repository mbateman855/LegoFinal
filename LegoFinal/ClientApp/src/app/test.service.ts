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

//export class StarwarsClientService {//  postUrl: string = 'https://localhost/api/legoresponse/';//  constructor(private http: HttpClient) { }//  getPeople(): Observable<StarwarsPeople> {//    return this.http.get<StarwarsPeople>(this.postUrl);//  }//}
