
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { Router } from '@angular/router';
import { DeleteProductAction, SelectProductsAction } from 'src/app/ngrx/store/Products/products.actions';

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
