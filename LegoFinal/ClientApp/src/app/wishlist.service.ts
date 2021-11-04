import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WishList } from './Models/wish-list';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  apiUrl: string = "https://localhost:5001/api/WishLists";

  constructor(private httpClient: HttpClient) { }

  getWishList(): Observable<WishList[]> {
    return this.httpClient.get<WishList[]>(this.apiUrl);
  }

  postItemToWishList(wishList: WishList): Observable<WishList> {
    return this.httpClient.post<WishList>(this.apiUrl, wishList);
  }
}
