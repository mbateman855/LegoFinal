import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../api-authorization/authorize.service';
import { Collection } from './Models/collection';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  apiUrl: string = "https://localhost:5001/api/Collections";

  userName: string;

  constructor(private httpClient: HttpClient, private authorizeService: AuthorizeService) {

    this.authorizeService.getUser()
      .subscribe(user => this.userName = user.name);
  }

  getCollection(): Observable<Collection[]> {
    return this.httpClient.get<Collection[]>(this.apiUrl + `/${this.userName}`)
  }

  postItemToCollection(collection: Collection): Observable<Collection> {
    return this.httpClient.post<Collection>(this.apiUrl, collection);

  }

  deleteCollection(id: number) {
    return this.httpClient.delete(this.apiUrl + `/${id}`)
  }

   
  


}
