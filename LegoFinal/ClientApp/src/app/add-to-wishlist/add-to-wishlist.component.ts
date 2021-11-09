import { Component, OnInit } from '@angular/core';
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

  constructor(private wishListService: WishlistService, private router: Router) { }

  ngOnInit() {
  }

  addItemToWishList(setName: string, setNumber: number, numberOfPieces: number, quantity: number, setId: number, userId: string) {
    let wishListItem = new WishList();
    wishListItem.setName = setName;
    wishListItem.setNumber = setNumber;
    wishListItem.numberOfPieces = numberOfPieces;
    wishListItem.quantity = quantity;
    wishListItem.setId = setId;
    wishListItem.userId = userId;

    this.wishListService.postItemToWishList(wishListItem)
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
