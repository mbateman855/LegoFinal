import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegoResponse, Results } from './Models/LegoResponse';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiUrl: string = 'https://localhost:44334/api/legoresponse';
  sets!: Results[];

  constructor(private legoResponse: LegoResponse, private results: Results, private http: HttpClient) { }

  getResults() {
    return this.http.get <LegoResponse["results"]>(this.apiUrl);
  }
}

//postEvent(event: Events): Observable < Events > {//  return this.httpClient.post<Events>(this.apiUrl, event);//}


//export class StarwarsClientService {//  postUrl: string = 'https://localhost/api/legoresponse/';//  constructor(private http: HttpClient) { }//  getPeople(): Observable<StarwarsPeople> {//    return this.http.get<StarwarsPeople>(this.postUrl);//  }//}
