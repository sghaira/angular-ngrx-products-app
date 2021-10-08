import {Action} from '@ngrx/store';
import { Product } from 'src/app/models/product.model';


export enum ProductsActionsTypes{
  /* Get All products*/
  GET_ALL_PRODUCTS= '[Products] Get All products',
  GET_ALL_PRODUCTS_SUCCESS= '[Products] Get All products Success',
  GET_ALL_PRODUCTS_ERROR= '[Products] Get All products Error',

 /* Get Selected products*/
  GET_SELECTED_PRODUCTS= '[Products] Get Selected products',
  GET_SELECTED_PRODUCTS_SUCCESS= '[Products] Get Selected products Success',
  GET_SELECTED_PRODUCTS_ERROR= '[Products] Get Selected products Error',

 /* Search products*/
 SEARCH_PRODUCTS= '[Products] Search products',
 SEARCH_PRODUCTS_SUCCESS= '[Products] Search products Success',
 SEARCH_PRODUCTS_ERROR= '[Products] Search products Error',

 /* Select products*/
 SELECT_PRODUCT= '[Products] Select products',
 SELECT_PRODUCT_SUCCESS= '[Products] Select products Success',
 SELECT_PRODUCT_ERROR= '[Products] Select products Error',

  /* Delete products*/
  DELETE_PRODUCT= '[Products] Delete products',
  DELETE_PRODUCT_SUCCESS= '[Products] Delete products Success',
  DELETE_PRODUCT_ERROR= '[Products] Delete products Error',

  /* New products*/
  NEW_PRODUCT= '[Products] New product',
  NEW_PRODUCT_SUCCESS= '[Products] New product Success',
  NEW_PRODUCT_ERROR= '[Products] New product Error',

   /* Save products*/
   SAVE_PRODUCT= '[Products] Save product',
   SAVE_PRODUCT_SUCCESS= '[Products] Save product Success',
   SAVE_PRODUCT_ERROR= '[Products] Save product Error',

   /* Edit products*/
   EDIT_PRODUCT= '[Products] Edit product',
   EDIT_PRODUCT_SUCCESS= '[Products] Edit product Success',
   EDIT_PRODUCT_ERROR= '[Products] Edit product Error',

  /* Update products*/
  UPDATE_PRODUCT= '[Products] Update product',
  UPDATE_PRODUCT_SUCCESS= '[Products] Update product Success',
  UPDATE_PRODUCT_ERROR= '[Products] Update product Error',

}

export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {
  }
}

export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

/* Get Selected Products Actions*/

export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

/* Search Products Actions*/

export class SearchProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public payload: string) {
  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

/* Select Products Actions*/

export class SelectProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT;
  constructor(public payload: Product) {
  }
}

export class SelectProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class SelectProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* Delete Products Actions*/

export class DeleteProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT;
  constructor(public payload: Product) {
  }
}

export class DeleteProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class DeleteProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* New Products Actions*/

export class NewProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT;
  constructor(public payload: any) {
  }
}

export class NewProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_SUCCESS;
  constructor(public payload: any) {
  }
}

export class NewProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* Save Products Actions*/

export class SaveProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT;
  constructor(public payload: number) {
  }
}

export class SaveProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class SaveProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* Edit Products Actions*/

export class EditProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT;
  constructor(public payload: Product) {
  }
}

export class EditProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class EditProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.EDIT_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* Update Products Actions*/

export class UpdateProductsAction implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT;
  constructor(public payload: Product) {
  }
}

export class UpdateProductsActionSuccess implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class UpdateProductsActionError implements Action{
  type: ProductsActionsTypes = ProductsActionsTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}
export type ProductsActions=
      GetAllProductsAction        | GetAllProductsActionSuccess      | GetAllProductsActionError
    | GetSelectedProductsAction   | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
    | SearchProductsAction        | SearchProductsActionSuccess      | SearchProductsActionError
    | SelectProductsAction        | SelectProductsActionSuccess      | SelectProductsActionError
    | DeleteProductsAction        | DeleteProductsActionSuccess      | DeleteProductsActionError
    | NewProductsAction           | NewProductsActionSuccess         | NewProductsActionError
    | SaveProductsAction          | SaveProductsActionSuccess        | SaveProductsActionError
    | EditProductsAction          | EditProductsActionSuccess        | EditProductsActionError
    | UpdateProductsAction        | UpdateProductsActionSuccess      | UpdateProductsActionError
;

