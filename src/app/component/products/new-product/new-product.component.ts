import { GetAllProductsAction, GetAllProductsActionSuccess, GetSelectedProductsAction, NewProductAction, SaveProductAction } from '../../../ngrx/store/action/products-actions/products.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/store/reducer/products-reducer/products.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
productFormGroup: FormGroup|null = null;
state: ProductsState|null = null;
readonly ProductsStateEnum = ProductsStateEnum;
submitted = false;
  constructor(private store: Store<any>,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new NewProductAction({}));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if (this.state?.dataState === ProductsStateEnum.NEW){
        this.productFormGroup = this.fb.group({
            name: ["", Validators.required],
            price: [0, Validators.required],
            quantity: [0, Validators.required],
            selected: [true, Validators.required],
            available: [true, Validators.required],
        });
     }
    });
  }

  newProduct(){
    this.store.dispatch(new NewProductAction(''));

  }
 /* onGetAllProducts(){
    this.store.dispatch( new GetAllProductsAction({ }));
  }*/
  onOK(){
    this.router.navigateByUrl("/products");
  }
  onSaveProduct(){
    this.submitted = true;
    if ( this.productFormGroup?.invalid)
    {return ; }
    return this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));

  }
}
