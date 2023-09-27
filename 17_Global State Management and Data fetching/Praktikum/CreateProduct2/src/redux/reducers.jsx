import { EDIT_PRODUCT } from "./actions";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      image: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "DELETE_PRODUCT":
      const newProducts = state.products.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        products: newProducts,
      };
    case EDIT_PRODUCT:
      const { index, newData } = action.payload;
      const updatedProducts = [...state.products];
      updatedProducts[index] = newData; // Gantikan data pada indeks yang ditentukan
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default rootReducer;
