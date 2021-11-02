

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/store/Products/products.reducer';

import { ProductService } from 'src/app/services/product.service';
import { EditProductAction, UpdateProductAction } from 'src/app/ngrx/store/Products/products.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

 productID: number ;
 state: ProductsState|null = null;
 productFormGroup!: FormGroup;
 readonly ProductsStateEnum = ProductsStateEnum;
 formBuilt = false;
 submitted = false;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              // private productService: ProductService,
              private fb: FormBuilder,
              private store: Store<any>) {
  this.productID = activatedRoute.snapshot.params.id;
}

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productID));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if (this.state?.dataState === ProductsStateEnum.LOADED){
        if (this.state.currentProduct != null){
          this.productFormGroup = this.fb.group({
            id: [this.state.currentProduct.id, Validators.required],
            name: [this.state.currentProduct.name, Validators.required],
            price: [this.state.currentProduct.price, Validators.required],
            quantity: [this.state.currentProduct.quantity, Validators.required],
            selected: [this.state.currentProduct.selected],
            available: [this.state.currentProduct.available],
          });
          this.formBuilt = true;
        }
      }
    });
  }

  // tslint:disable-next-line:typedef
  onUpdateProduct(){
    this.submitted = true;
    if (this.productFormGroup?.invalid){
    return;
  }
    this.store.dispatch(new UpdateProductAction(this.productFormGroup.value));
  }
  // tslint:disable-next-line:typedef
  okUpdated(){
    this.router.navigateByUrl("/products");
  }
}


