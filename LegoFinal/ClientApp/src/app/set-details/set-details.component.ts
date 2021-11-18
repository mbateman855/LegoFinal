import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../Models/collection';
import { Results } from '../Models/LegoResponse';
import { PartsResponse } from '../Models/PartsResponse';
import { PartsService } from '../parts.service';
import { TestService } from '../test.service';
import { WishlistService } from '../wishlist.service';
import { WishList } from '../Models/wish-list';


@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.css']
})
export class SetDetailsComponent implements OnInit {

  set!: Results;
  parts!: PartsResponse;
  baseUrl: string;

  constructor(private testService: TestService, private partsService: PartsService, private route: ActivatedRoute, private router: Router, @Inject('BASE_URL') baseUrl: string, private collectionService:CollectionService, private wishlistService: WishlistService)
  {
    this.baseUrl = baseUrl;
  }



  ngOnInit() {
    this.route.paramMap      .subscribe(params => {        let set_num = params.get('set_num');        console.log(set_num);        this.testService.getSetDetails(set_num, this.baseUrl).subscribe(x => {
          this.set = x;          console.log(this.set);        });        this.partsService.getPartResults(set_num, this.baseUrl).subscribe(x => {          this.parts = x;          console.log(this.parts);
        });      });
  }

  displaySetDetails(setNum: string) {
    this.router.navigate(['set-details', setNum]);
  }
  addFavorite(favorite: Collection) {
    this.collectionService.postItemToCollection(this.baseUrl,favorite).subscribe()
  }
  addWishlist(wish: WishList) {
    this.wishlistService.postItemToWishList(this.baseUrl,wish).subscribe()
  }

}
