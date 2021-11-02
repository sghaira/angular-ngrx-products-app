import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageInterceptor } from './components/interceptors/language.interceptor';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsEffects } from './ngrx/store/Products/products.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productsReducer } from './ngrx/store/Products/products.reducer';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common'
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [

    AppComponent,
    ProductsComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    NewProductComponent,
    EditProductComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavBarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // les reducers
    StoreModule.forRoot({ catalogState: productsReducer}),
    // les effects
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule,
    //firebase modules
    AngularFireModule.initializeApp(  {
      apiKey: "AIzaSyCI1S_C_nUA7bkgFLm8MGQGsafOvknHFuU",
      authDomain: "market-55662.firebaseapp.com",
      databaseURL: "https://market-55662-default-rtdb.firebaseio.com",
      projectId: "market-55662",
      storageBucket: "market-55662.appspot.com",
      messagingSenderId: "537016441696",
      appId: "1:537016441696:web:f7169a0343a0b353335c05",
      measurementId: "G-G8LCCVLQ96"
    },),
    MatIconModule,
    // FirestoreSettignsToken,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, //Auth FireStore
    AngularFirestoreModule,//Storage firestore
       ////// material
       MatMenuModule,
       //////////translate
       TranslateModule.forRoot({
         defaultLanguage: 'en',
         loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpClient]
         }
     })

  ],
  providers: [AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:LanguageInterceptor,multi:true, },],
  bootstrap: [AppComponent]
})
export class AppModule { }
