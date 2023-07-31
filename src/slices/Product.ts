/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addProduct,
  getProduct,
  getProductById,
  removeProduct,
  updateProduct,
} from "@/action/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: "",
} as {
  products: any[];
  product: any;
  isLoading: boolean;
  error: string;
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  // rerender
  extraReducers: (builder) => {
    // fetching
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
    });
    // getOneProduct

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });

    // adding - 3 status
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    // updating
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const product = action.payload;
      console.log(state.products);
    });
    // deleting
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((item: any) => item.id !== id);
    });
  },
});

export const productReducer = productSlice.reducer;
