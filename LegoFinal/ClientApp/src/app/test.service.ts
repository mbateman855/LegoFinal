import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegoResponse, Results } from './Models/LegoResponse';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //apiUrl: string = 'https://localhost:44334/api/legoresponse';
  apiUrl: string = 'https://rebrickable.com/api/v3/lego/sets/';
  //sets!: Results[];

  constructor(private http: HttpClient) { }



  getResults() {

    //const httpOptions = {
    //  headers: new HttpHeaders({
    //    'Content-Type': 'application/json',
    //    Authorization: 'my-auth-token'
    //  })
    //};

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'key b49eae0c7f448967c55f64c24fc12bd0'
      })
    };
    //httpOptions.headers.append('Authorization', 'key b49eae0c7f448967c55f64c24fc12bd0');

    return this.http.get<LegoResponse["results"]>(this.apiUrl, httpOptions)
  }
}

//postEvent(event: Events): Observable < Events > {//  return this.httpClient.post<Events>(this.apiUrl, event);//}


//export class StarwarsClientService {//  postUrl: string = 'https://localhost/api/legoresponse/';//  constructor(private http: HttpClient) { }//  getPeople(): Observable<StarwarsPeople> {//    return this.http.get<StarwarsPeople>(this.postUrl);//  }//}
