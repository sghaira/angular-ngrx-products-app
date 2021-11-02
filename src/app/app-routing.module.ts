import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';

import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthGuard } from './services/guards/not-auth.guard';





const routes: Routes = [
  { path: '', component: HomeComponent, data: {index: 0} },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard], data: {index: 1} },
  { path: 'signup', component: SignupComponent, canActivate: [NotAuthGuard], data: {index: 2} },
  { path: 'new-product',component:NewProductComponent, canActivate: [NotAuthGuard], data: {index:3}},
  {path: 'edit-product/:id',component:EditProductComponent, canActivate: [NotAuthGuard], data: {index:4}},
  {path: 'products',component:ProductsComponent, data: {index:5}},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
