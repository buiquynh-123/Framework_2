import { createContext, useReducer } from "react";
import { IProduct } from "@/interface/Product";
export const ProductContext = createContext();

export const initialState = {
  products: [],
  loading: false,
};
interface IState {
  products: IProduct[];
  loading: boolean;
}
export const productReducer = (state: IState, action: any) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) => {
          product.id === action.payload.id ? action.payload : product;
        }),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export const ProductProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
