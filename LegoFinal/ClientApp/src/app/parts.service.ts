import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartsResponse, PartsResult } from './Models/PartsResponse';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  apiUrl: string = "https://localhost:44334/api/partsresponse";

  constructor(private httpClient: HttpClient) { }

  getPartResults(id: string) {
    return this.httpClient.get<PartsResult>(`${this.apiUrl}/${id}`);
  }
}
