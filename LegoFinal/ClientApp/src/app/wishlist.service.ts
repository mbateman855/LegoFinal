import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../api-authorization/authorize.service';
import { WishList } from './Models/wish-list';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  //apiUrl: string = "https://localhost:5001/api/WishLists";

  userName: string;

  constructor(private httpClient: HttpClient, private authorizeService: AuthorizeService) {

    this.authorizeService.getUser()
      .subscribe(user => this.userName = user.name);
  }

  getWishList(baseUrl: string): Observable<WishList[]> {
    //return this.httpClient.get<WishList[]>(this.apiUrl + `/${this.userName}`);
    return this.httpClient.get<WishList[]>(baseUrl + "api/WishLists/" + this.userName);
  }

  postItemToWishList(baseUrl: string, wishList: WishList): Observable<WishList> {

    wishList.userName = this.userName
    //return this.httpClient.post<WishList>(this.apiUrl, wishList);
    return this.httpClient.post<WishList>(baseUrl + "api/WishLists/", wishList);
  }

  deleteWishList(baseUrl: string, id: number) {
    //return this.httpClient.delete(this.apiUrl + `/${id}`)
    return this.httpClient.delete(baseUrl + "api/WishLists/" + id)
  }

}
