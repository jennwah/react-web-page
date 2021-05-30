import { ProductActionTypes } from '../actions/product';

const initialState = {
  productList: [],
  selectedProduct: null,
}

export const ProductReducers = (state = initialState, action) => {
  switch(action.type) {
    case ProductActionTypes.SET_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };
    case ProductActionTypes.SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: null,
      }
    default:
      return state;
  }
};