import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../Models/collection';

@Component({
  selector: 'app-add-to-collection',
  templateUrl: './add-to-collection.component.html',
  styleUrls: ['./add-to-collection.component.css']
})
export class AddToCollectionComponent implements OnInit {

  baseUrl: string;

  constructor(private collectionService: CollectionService, private router: Router, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }

  ngOnInit() {
  }

  addItemToCollection(name: string, set_num: string, quantity: number, setId: number) {
    let collectionItem = new Collection();
    collectionItem.name = name;
    collectionItem.set_num = set_num;
    collectionItem.quantity = quantity;
    collectionItem.setId = setId;
    //collectionItem.userId = userId;
   // collectionItem.collectionId = collectionId;

    this.collectionService.postItemToCollection(this.baseUrl, collectionItem)
  .subscribe(result => {
    this.router.navigateByUrl('/collection')
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



