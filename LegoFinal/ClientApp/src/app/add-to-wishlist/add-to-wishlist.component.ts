import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { WishList } from '../Models/wish-list';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-add-to-wishlist',
  templateUrl: './add-to-wishlist.component.html',
  styleUrls: ['./add-to-wishlist.component.css']
})
export class AddToWishlistComponent implements OnInit {

  baseUrl: string;

  constructor(private wishListService: WishlistService, private router: Router, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  addItemToWishList(name: string, set_num: number, numberOfPieces: number, quantity: number, setId: number) {
    let wishListItem = new WishList();
    wishListItem.name = name;
    wishListItem.set_num = set_num;
    wishListItem.numberOfPieces = numberOfPieces;
    wishListItem.quantity = quantity;
    wishListItem.setId = setId;
    //wishListItem.userId = userId;

    this.wishListService.postItemToWishList(this.baseUrl, wishListItem)
      .subscribe(result => {
        this.router.navigateByUrl('/wishlist')
      }, (error: Response) => {
        if (error.status === 404) {
          console.log('Not found');
          alert('Not found');
        }

        if (error.status === 500) {

        }
        console.log(error.json);
      });
  }

}
