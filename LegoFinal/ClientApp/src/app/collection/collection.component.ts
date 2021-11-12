import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserManager } from 'oidc-client';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { CollectionService } from '../collection.service';
//import { AuthorizeService } from '../../api-authorization/authorize.service'
import { Collection } from '../Models/collection';
//import { User } from 'oidc-client';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectionItems: Collection[]


  baseUrl: string;

  constructor(private collectionService: CollectionService, private router: Router, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }


  ngOnInit() {
    this.collectionService.getCollection(this.baseUrl)
      .subscribe(result => {
        console.log(result);
        this.collectionItems = result;
      })

       
  }

  onDelete(id: number) {
    this.collectionService.deleteCollection(this.baseUrl, id)
      .subscribe(result => {
        this.collectionService.getCollection(this.baseUrl);
        this.router.navigateByUrl('/collection');
      })

  }

 
  btnClick = function () {
    this.router.navigateByUrl('/add-to-collection') 
  }

}


