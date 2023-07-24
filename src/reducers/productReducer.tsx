/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer";
const initialState = {
  products: [],
  loading: false,
  error: "",
};
export const productReducer = (state = initialState, action: any) => {
  return produce(state, (drafState: any) => {
    switch (action.type) {
      case "product/fetching":
        drafState.loading = true;
        break;
      case "product/fetchingSuccess":
        drafState.products = action.payload;
        break;
      case "product/fetchingFailed":
        drafState.error = action.payload;
        break;
      case "product/fetchingFinally":
        drafState.isLoading = false;
        break;
      case "product/addProduct":
        drafState.products.push(action.paylad);
        break;
      case "product/updateProduct":
        const product = action.payload;
        drafState.products = state.products.map((item: any) =>
          item.id === product.id ? product : item
        );
        break;
      case "product/deleteProduct":
        const id = action.payload;
        drafState.products = state.products.filter(
          (item: any) => item.id != id
        );
        break;
    }
  });
};
