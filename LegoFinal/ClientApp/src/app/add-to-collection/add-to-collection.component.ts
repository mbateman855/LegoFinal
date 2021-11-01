import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../collection.service';
import { Collection } from '../Models/collection';

@Component({
  selector: 'app-add-to-collection',
  templateUrl: './add-to-collection.component.html',
  styleUrls: ['./add-to-collection.component.css']
})
export class AddToCollectionComponent implements OnInit {

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit() {
  }

  addItemToCollection(setName: string, setNumber: string, quantity: number, setId: number, userId: string, collectionId: number) {
    let collectionItem = new Collection();
    collectionItem.setName = setName;
    collectionItem.setNumber = setNumber;
    collectionItem.quantity = quantity;
    collectionItem.setId = setId;
    collectionItem.userId = userId;
    collectionItem.collectionId = collectionId;

    this.collectionService.postItemToCollection(collectionItem)
      .subscribe(result => {
        this.router.navigateByUrl('/collections')
      }
        , (error: Response) => {
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


