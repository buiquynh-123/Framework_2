// import React from "react";
import Button from "../Button";
import { useEffect, useReducer, useContext } from "react";
import { initialState, productReducer } from "@/reducers/productReducer";
import { deleteCar, getCar } from "@/api/car";
import { IProduct } from "@/interface/Product";
import { ProductContext } from "@/reducers/productReducer";

const Item = () => {
  // const [state, dispatch] = useReducer(productReducer, initialState);
  const { state, dispatch } = useContext(ProductContext);
  console.log(state);
  useEffect(() => {
    getCar().then(({ data }) => {
      dispatch({ type: "SET_PRODUCT", payload: data });
    });
  }, []);
  console.log(state.products);
  const handleRemove = async (id: any) => {
    await deleteCar(id);
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  };

  return (
    <>
      {state.products.map((product: IProduct) => {
        return (
          <li key={product?.id}>
            <span className="mr-4">{product.name}</span>

            <Button danger onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
          </li>
        );
      })}
    </>
  );
};

export default Item;
