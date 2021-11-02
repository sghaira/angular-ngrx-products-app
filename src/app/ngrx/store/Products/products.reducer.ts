

import {Action} from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import { ProductsActions, ProductsActionsTypes } from './products.actions';

export enum ProductsStateEnum{
  LOADING= "Loading",
  LOADED= "Loaded",
  ERROR= "Error",
  INITIAL= "Initial",
  NEW= "New",
  EDIT= "Edit",
  UPDATED= "Updated"
}
export interface ProductsState{
    products: Product[];
    errorMessage: string;
    dataState: ProductsStateEnum;
    currentProduct?: Product|null;
    currentAction: ProductsActions|null;
}
const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL,
  currentProduct : null,
  currentAction: null,
};

// tslint:disable-next-line:typedef
export function productsReducer(state= initState, action: Action): ProductsState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions) };
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: ( action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: ( action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};
    /* Get Selected Products*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions) };
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

    /*Search Products*/
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING , currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

      /*Select Product*/
    case ProductsActionsTypes.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING , currentAction: ( action as ProductsActions) };
    case ProductsActionsTypes.SELECT_PRODUCT_SUCCESS:
      const product: Product = (action as ProductsActions).payload;
      const listProducts = [...state.products];
      // tslint:disable-next-line:no-shadowed-variable
      const data: Product[] = listProducts.map( p  => p.id === product.id ? product : p  );
      return {...state, dataState: ProductsStateEnum.LOADED, products: data, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

       /*Delete Product*/
    case ProductsActionsTypes.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.DELETE_PRODUCT_SUCCESS:
      const p: Product = (action as ProductsActions).payload;
      const index = state.products.indexOf(p);
      const productslist = [...state.products];
      productslist.splice(index, 1 );
      return {...state, dataState: ProductsStateEnum.LOADED, products: productslist, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

       /*New Product*/
    case ProductsActionsTypes.NEW_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

      /*Save Product*/
    case ProductsActionsTypes.SAVE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.SAVE_PRODUCT_SUCCESS:
      const prods: Product[] = [...state.products];
      prods.push((action as ProductsActions).payload);
      return {...state, dataState: ProductsStateEnum.LOADED , products: prods, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

      /*Save Product*/
    case ProductsActionsTypes.EDIT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.EDIT_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED , currentProduct: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.EDIT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};

       /* Update Product*/
    case ProductsActionsTypes.UPDATE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.UPDATE_PRODUCT_SUCCESS:
      const updateProduct: Product = (action as ProductsActions).payload;
      // tslint:disable-next-line:no-shadowed-variable
      const updatedProductsList: Product[] = state.products.map( p => (p.id === updateProduct.id) ? updateProduct : p);
      return {...state, dataState: ProductsStateEnum.UPDATED, products: updatedProductsList , currentAction: ( action as ProductsActions)};
    case ProductsActionsTypes.UPDATE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsActions).payload
        , currentAction: ( action as ProductsActions)};


      default : return {...state};
  }
}
