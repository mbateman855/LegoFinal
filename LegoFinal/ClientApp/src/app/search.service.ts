import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegoResponse } from './Models/LegoResponse';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  getSearchResults(baseUrl: string, query: string)
  {
    return this.httpClient.get<LegoResponse>(baseUrl + "api/legoresponse" + query);
  }
}
