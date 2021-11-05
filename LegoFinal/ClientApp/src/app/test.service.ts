import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegosClient } from './api-test/Services/LegosClient';
import { LegoResponse, Results } from './Models/LegoResponse';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiUrl: string = "https://localhost:44334/api/legoresponse";

  constructor(private httpClient: HttpClient) { }

  getResults() {
    return this.httpClient.get<LegoResponse>(this.apiUrl);
  }
}
