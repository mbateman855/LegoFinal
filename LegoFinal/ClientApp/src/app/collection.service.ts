import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Collection } from './Models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  apiUrl: string = "https://localhost:5001/api/Collections";

  constructor(private httpClient: HttpClient) { }

  getCollection(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>(this.apiUrl)
  }

  postItemToCollection(collection: Collection): Observable<Collection> {
    return this.httpClient.post<Collection>(this.apiUrl, collection);

  }

  


}
