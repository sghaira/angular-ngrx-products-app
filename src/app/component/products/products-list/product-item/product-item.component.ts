import { DeleteProductAction } from '../../../../ngrx/store/action/products-actions/products.actions';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsState } from 'src/app/ngrx/store/reducer/products-reducer/products.reducer';
import { SelectProductsAction } from 'src/app/ngrx/store/action/products-actions/products.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product|null = null;
  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSelect(product: Product){
      this.store.dispatch(new SelectProductsAction(product));
  }
  // tslint:disable-next-line:typedef
  onDelete(product: Product){
    this.store.dispatch(new DeleteProductAction(product));

  }
  // tslint:disable-next-line:typedef
  onEdit(product: Product){
     this.router.navigateByUrl("/edit-product/" + product.id);

  }
}
