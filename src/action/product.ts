/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/api/instance";

// export const fetchProducts = () => async (dispatch: any) => {
//   dispatch({ type: "product/fetching" });
//   try {
//     const data = await instance.get(`/products`);
//     dispatch({ type: "product/fetchingSuccess", payload: data });
//   } catch (error: any) {
//     dispatch({ type: "product/fetchingFailed", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };

// export const addProducts = (product: any) => async (dispatch: any) => {
//   try {
//     const data = await instance.post(`/products`, product);
//     dispatch({ type: "product/addProduct", payload: data });
//   } catch (error: any) {
//     dispatch({ type: "product/fetchingFailed", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };
// export const editProducts = (product: any) => async (dispatch: any) => {
//   try {
//     const data = await instance.put(`/products/${product.id}`, product);
//     dispatch({ type: "product/updateProduct", payload: data });
//   } catch (error: any) {
//     dispatch({ type: "product/fetchingFailed", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };

// export const removeProduct = (id: any) => async (dispatch: any) => {
//   try {
//     await instance.delete(`products/${id}`);
//     dispatch({ type: "product/deleteProduct", payload: id });
//   } catch (error: any) {
//     dispatch({ type: "product/fetchingFailed", payload: error.message });
//   } finally {
//     dispatch({ type: "product/fetchingFinally" });
//   }
// };
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const data = await instance.get(`/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: any) => {
    try {
      const data = await instance.get(`products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: any) => {
    try {
      const data = await instance.post(`/products`, product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product: any) => {
    try {
      const data = await instance.patch(`/products/${product.id}`, product);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const removeProduct = createAsyncThunk(
  "product/removeProduct",
  async (id: number) => {
    try {
      await instance.delete(`/products/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);
