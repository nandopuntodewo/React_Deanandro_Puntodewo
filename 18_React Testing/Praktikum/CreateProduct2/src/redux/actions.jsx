export const addProduct = (product) => ({
  type: "ADD_PRODUCT",
  payload: product,
});

export const deleteProduct = (index) => ({
  type: "DELETE_PRODUCT",
  payload: index,
});

export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const editProduct = (index, newData) => ({
  type: EDIT_PRODUCT,
  payload: { index, newData },
});