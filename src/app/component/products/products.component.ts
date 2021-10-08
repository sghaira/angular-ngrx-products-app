

import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/store/products-reducer/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
readonly ProductsStateEnum = ProductsStateEnum;
productsState$: Observable<ProductsState>|null = null;
  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.productsState$ = this.store
    .pipe(
      map(state =>  state.catalogState)
    );
  }
}
