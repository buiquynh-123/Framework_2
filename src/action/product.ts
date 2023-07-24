/* eslint-disable @typescript-eslint/no-explicit-any */
import instance from "@/api/instance";
export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: "product/fetching" });
  try {
    const data = await instance.get(`/products`);
    dispatch({ type: "product/fetchingSuccess", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
export const addProducts = (product: any) => async (dispatch: any) => {
  try {
    const data = await instance.post(`/products`, product);
    dispatch({ type: "product/addProduct", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
export const editProducts = (product: any) => async (dispatch: any) => {
  try {
    const data = await instance.put(`/products/${product.id}`);
    dispatch({ type: "product/updateProduct", payload: data });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
export const removeProduct = (id: any) => async (dispatch: any) => {
  try {
    await instance.delete(`products/${id}`);
    dispatch({ type: "product/deleteProduct", payload: id });
  } catch (error: any) {
    dispatch({ type: "product/fetchingFailed", payload: error.message });
  } finally {
    dispatch({ type: "product/fetchingFinally" });
  }
};
