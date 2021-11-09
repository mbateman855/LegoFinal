import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { AuthorizeService } from '../../api-authorization/authorize.service'
import { Collection } from '../Models/collection';
import { User } from 'oidc-client';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectionItems: Collection[]




  constructor(private collectionService: CollectionService, private router: Router ) { }


  ngOnInit() {
    this.collectionService.getCollection()
      .subscribe(result => {
        console.log(result);
        this.collectionItems = result;
      })

 
  };
  btnClick = function () {
    this.router.navigateByUrl('/add-to-collection') 
  }

}
