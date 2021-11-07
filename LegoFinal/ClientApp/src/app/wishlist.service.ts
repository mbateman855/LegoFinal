import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../api-authorization/authorize.service';
import { WishList } from './Models/wish-list';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  apiUrl: string = "https://localhost:5001/api/WishLists";
  userName: string;

  constructor(private httpClient: HttpClient, private authorizeService: AuthorizeService) {

    this.authorizeService.getUser()
      .subscribe(user => this.userName = user.name)

  }

  getWishList(): Observable<WishList[]> {
    return this.httpClient.get<WishList[]>(this.apiUrl + `/${this.userName}`);
  }

  postItemToWishList(wishList: WishList): Observable<WishList> {
    return this.httpClient.post<WishList>(this.apiUrl, wishList);
  }

  deleteWishList(id: number) {
    return this.httpClient.delete(this.apiUrl + `/${id}`)
  }

}
