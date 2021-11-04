import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddToWishlistComponent } from './add-to-wishlist/add-to-wishlist.component';
import { CollectionComponent } from './collection/collection.component';
import { AddToCollectionComponent } from './add-to-collection/add-to-collection.component';
import { ApiTestComponent } from './api-test/api-test.component';
//import { LegosClient } from './api-test/Services/LegosClient';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    WishlistComponent,
    AddToWishlistComponent,
    CollectionComponent,
    AddToCollectionComponent
    FetchDataComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'add-to-wishlist', component: AddToWishlistComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'add-to-collection', component: AddToCollectionComponent }
      { path: 'api-test', component: ApiTestComponent }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
