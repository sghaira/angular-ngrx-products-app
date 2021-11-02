import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
//import { CartService } from 'src/app/services/cart.service';
//import { GoodsService } from 'src/app/services/goods.service';
//import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(
              ) { }
  ngOnInit() {}
}

