import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishList } from '../Models/wish-list';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishListItems: WishList[]
  baseUrl: string;

  constructor(private wishListService: WishlistService, private router: Router, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
    this.wishListService.getWishList(this.baseUrl)
      .subscribe(result => {
        this.wishListItems = result;
      })
  }

  onDelete(id: number) {
    this.wishListService.deleteWishList(this.baseUrl, id)
      .subscribe(result => {
        this.wishListService.getWishList(this.baseUrl)
          .subscribe(result => {
            this.wishListItems = result;
          })

      })

  }



  btnClick = function () {
    this.router.navigateByUrl('/add-to-wishlist')
  }

}
