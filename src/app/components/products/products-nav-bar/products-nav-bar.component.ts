import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetSelectedProductsAction, ProductsActionsTypes, SearchProductsAction } from 'src/app/ngrx/store/Products/products.actions';
import { ProductsState } from 'src/app/ngrx/store/Products/products.reducer';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
state: ProductsState|null = null;
readonly ProductsActionsTypes = ProductsActionsTypes;
  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-shadowed-variable
    this.store.subscribe(state => {
      this.state = state.catalogState;
    });
}
 // tslint:disable-next-line:typedef
 onGetAllProducts(){
   this.store.dispatch( new GetAllProductsAction({}));
 }


 onGetSelectedProducts(){
  this.store.dispatch( new GetSelectedProductsAction({}));
 }


 onSearch(dataForm: any){
  this.store.dispatch( new SearchProductsAction(dataForm.keyword));
 }
 onNewProducts(){
  this.router.navigateByUrl("/new-product");
 }

}
