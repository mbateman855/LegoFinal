import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegoResponse, Results } from './Models/LegoResponse';
import { PartsResponse } from './Models/PartsResponse';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiUrl: string = "https://localhost:44334/api/legoresponse/";

  constructor(private httpClient: HttpClient) { }

  getSetResults() {
    return this.httpClient.get<LegoResponse>(this.apiUrl);
  }
  getSetDetails(id: string) {
    return this.httpClient.get<Results>(`${this.apiUrl}/${id}`);
  }
  //getPartResults() {
  //  return this.httpClient.get<PartsResponse>(this.apiUrl + "/parts");
  //}
}
