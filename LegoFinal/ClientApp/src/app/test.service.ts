import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from '../main';
import { LegoResponse, Results } from './Models/LegoResponse';
import { PartsResponse } from './Models/PartsResponse';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  
  //apiUrl: string = "https://localhost:44334/api/legoresponse/";

  constructor(private httpClient: HttpClient) { }

  getSetResults(baseUrl: string) {
    return this.httpClient.get<LegoResponse>(baseUrl + "api/legoresponse/");
  }
  getSetDetails(id: string, baseUrl: string) {
    return this.httpClient.get<Results>(baseUrl + "api/legoresponse/" + id);
  }
  //getPartResults() {
  //  return this.httpClient.get<PartsResponse>(this.apiUrl + "/parts");
  //}
}
