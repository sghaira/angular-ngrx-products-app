import {Injectable} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';

import {catchError, map, mergeMap} from 'rxjs/operators';
import { DeleteProductActionError, DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess, GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  NewProductActionSuccess,
  ProductsActions, ProductsActionsTypes,
  SaveProductActionError,
  SaveProductActionSuccess,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductsActionError,
  SelectProductsActionSuccess,
  UpdateProductActionError,
  UpdateProductActionSuccess} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private productService: ProductService, private effectActions: Actions) {
  }

  getAllProductsEffect: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action: ProductsActions) => {
            return this.productService.getProducts()
              .pipe(
                map((products) => new GetAllProductsActionSuccess(products)),
                catchError((err) => of(new GetAllProductsActionError(err.message)))
              );
      })
    )
  );

   /* Get Selected Products*/
   getSelectedProductsEffect: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productService.getSelectedProducts()
          .pipe(
            map((products) => new GetSelectedProductsActionSuccess(products)),
            catchError((err) => of(new GetSelectedProductsActionError(err.message)))
          );
      })
    )
  );

   /* Search  Products Effect*/
   SearchProductsEffect: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productService.searchProducts(action.payload)
          .pipe(
            map((products) => new SearchProductsActionSuccess (products)),
            catchError((err) => of(new SearchProductsActionError(err.message)))
          );
      })
    )
  );

  /* Select  Product Effect*/
  SelectProductsEffect: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.SELECT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.setSelected(action.payload)
          .pipe(
            map((product) => new SelectProductsActionSuccess (product)),
            catchError((err) => of(new SelectProductsActionError(err.message)))
          );
      })
    )
  );
   /* Delete  Product Effect*/
   DeleteProductsEffect: Observable<ProductsActions> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionsTypes.DELETE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.delete(action.payload.id)
          .pipe(
            map(() => new DeleteProductActionSuccess (action.payload)),
            catchError((err) => of(new DeleteProductActionError(err.message)))
          );
      })
    )
  );
 /* New  Product Effect*/
 NewProductsEffect: Observable<ProductsActions> = createEffect(
  () => this.effectActions.pipe(
    ofType(ProductsActionsTypes.NEW_PRODUCT),
    map((action: ProductsActions) => {
      return new NewProductActionSuccess({});
    })
  )
);

 /* Save  Product Effect*/
 SaveProductsEffect: Observable<ProductsActions> = createEffect(
  () => this.effectActions.pipe(
    ofType(ProductsActionsTypes.SAVE_PRODUCT),
    mergeMap((action: ProductsActions) => {
      return this.productService.save(action.payload)
        .pipe(
          map((product) => new SaveProductActionSuccess (product)),
          catchError((err) => of(new SaveProductActionError(err.message)))
        );
    })
  )
);

/* Edit  Product Effect*/
EditProductsEffect: Observable<ProductsActions> = createEffect(
  () => this.effectActions.pipe(
    ofType(ProductsActionsTypes.EDIT_PRODUCT),
    mergeMap((action: ProductsActions) => {
      return this.productService.getProductById(action.payload)
        .pipe(
          map((product) => new EditProductActionSuccess (product)),
          catchError((err) => of(new EditProductActionError(err.message)))
        );
    })
  )
);


 /* Update  Product Effect*/
 UpdateProductsEffect: Observable<ProductsActions> = createEffect(
  () => this.effectActions.pipe(
    ofType(ProductsActionsTypes.UPDATE_PRODUCT),
    mergeMap((action: ProductsActions) => {
      return this.productService.update(action.payload)
        .pipe(
          map((product) => new UpdateProductActionSuccess (product)),
          catchError((err) => of(new UpdateProductActionError(err.message)))
        );
    })
  )
);

}

