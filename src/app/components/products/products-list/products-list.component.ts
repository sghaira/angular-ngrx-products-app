import { Component, Input, OnInit } from '@angular/core';
import { ProductsState } from 'src/app/ngrx/store/Products/products.reducer';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() state: ProductsState |null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
