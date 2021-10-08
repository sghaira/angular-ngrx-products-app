

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './component/products/products.component';
import { ProductsNavBarComponent } from './component/products/products-nav-bar/products-nav-bar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ProductsEffects } from './ngrx/store/effects/products-effects/products.effects';
import { ProductsListComponent } from './component/products/products-list/products-list.component';
import { ProductItemComponent } from './component/products/products-list/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './component/products/new-product/new-product.component';
import { EditProductComponent } from './component/products/edit-product/edit-product.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { productsReducer } from './ngrx/store/products-reducer/products.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    NewProductComponent,
    EditProductComponent,
    SignUpComponent,
    LogInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // les reducers
    StoreModule.forRoot({ catalogState: productsReducer}),
    // les effects
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
