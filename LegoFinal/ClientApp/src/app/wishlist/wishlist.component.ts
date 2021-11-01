import { Component, OnInit } from '@angular/core';
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

  constructor(private wishListService: WishlistService, private router: Router) { }

  ngOnInit(): void {
    this.wishListService.getWishList()
      .subscribe(result => {
        this.wishListItems = result;
      })
  }
  btnClick = function () {
    this.router.navigateByUrl('/add-to-wishlist')
  }

}
