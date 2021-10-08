import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './component/landing/landing.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { EditProductComponent } from './component/products/edit-product/edit-product.component';
import { NewProductComponent } from './component/products/new-product/new-product.component';


import { ProductsComponent } from './component/products/products.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'products',
    // tslint:disable-next-line:whitespace
    component:ProductsComponent,
  },
  {
    path: 'new-product',
    // tslint:disable-next-line:whitespace
    component:NewProductComponent,
  },
  {
    path: 'edit-product/:id',
    // tslint:disable-next-line:whitespace
    component:EditProductComponent,
  },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
