export const ProductActionTypes = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_SELECTED_PRODUCT: 'SET_SELECTED_PRODUCT',
  REMOVE_SELECTED_PRODUCT: 'REMOVE_SELECTED_PRODUCT',
}

export const setProducts = products => {
  return {
    type: ProductActionTypes.SET_PRODUCTS,
    payload: products,
  }
};

export const setSelectedProduct = product => {
  return {
    type: ProductActionTypes.SET_SELECTED_PRODUCT,
    payload: product,
  }
};

export const removeSelectedProduct = () => {
  return {
    type: ProductActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}