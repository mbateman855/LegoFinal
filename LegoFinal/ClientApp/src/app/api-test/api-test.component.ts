import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LegoResponse, Results } from '../Models/LegoResponse';
import { PartsResult } from '../Models/PartsResponse';
import { PartsService } from '../parts.service';
import { TestService } from '../test.service';
import { Collection } from '../Models/collection';
import { CollectionService } from '../collection.service';
import { WishList } from '../Models/wish-list';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  baseUrl: string;

  constructor(private testService: TestService, private partsService: PartsService, private route: ActivatedRoute, private router: Router, @Inject('BASE_URL') baseUrl: string, private collectionService: CollectionService, private wishlistService: WishlistService) {

    this.baseUrl = baseUrl;

 

  baseUrl: string;
  constructor(private testService: TestService, private partsService: PartsService, private route: ActivatedRoute, private router: Router, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }

  results!: LegoResponse;
  sets!: Results[];
  parts!: PartsResult;
  setDetails!: Results;

  ngOnInit() {
    const setId = this.route.snapshot.paramMap.get('set_num');
    this.testService.getSetResults(this.baseUrl)
      .subscribe(result => {
        this.results = result;
        this.sets = result.results;
        //setId = result.results.forEach(x => x.set_num = setId);
      });
    this.testService.getSetDetails(setId, this.baseUrl).subscribe(result => this.setDetails = result);
    //this.partsService.getPartResults(setId).subscribe(result => this.parts = result);
    //this.testService.getPartResults(id).subscribe(partResult => { this.parts = partResult.results });

    //let setId;
    //this.route.paramMap
    //  .subscribe(params => {
    //    let id = Number(params.get('set_num'));
    //    this.testService.getSetResults().subscribe(result => {
    //        this.sets = result.results;
    //        setId = result.results.forEach(y => y.set_num = setId);
    //      this.partsService.getPartResults().subscribe(result => {
    //        this.parts = result.results;
    //        })
    //      })
    //  })
    //}
  }

  displaySetDetails(setNum: string) {
    this.router.navigate(['set-details', setNum]);
  }
  //searchLegoResponse(userInput: string) {
  //  console.log(userInput);
  //}

  addFavorite(favorite: Collection) {
    this.collectionService.postItemToCollection(favorite).subscribe()
  }

  addWishlist(wish: WishList) {
    this.wishlistService.postItemToWishList(wish).subscribe()
  }

}

