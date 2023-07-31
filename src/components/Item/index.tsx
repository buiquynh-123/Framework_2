/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
// import React from "react";
import Button from "../Button";
import { IProduct } from "@/interface/Product";
import { connect } from "react-redux";
import { removeProduct } from "@/action/product";
import instance from "@/api/instance";
import { useDispatch, useSelector } from "react-redux";
const Item = ({ removeProduct }: any) => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);
  console.log(products);
  const handleRemove = (id: any) => {
    console.log(id);
    removeProduct(id);
  };
  const handleGetById = async (id: any) => {
    console.log(id);
    const data = await instance.get(`/products/${id}`);
    console.log(data);
    dispatch({ type: "productById/fetchingSuccess", payload: data });
  };
  return (
    <>
      {products.map((product: IProduct) => {
        return (
          <li key={product?.id}>
            <span className="mr-4">{product.name}</span>

            <Button danger onClick={() => handleRemove(product.id)}>
              Remove
            </Button>
            <Button danger onClick={() => handleGetById(product.id)}>
              update
            </Button>
          </li>
        );
      })}
    </>
  );
};
const mapDispatchToProps = {
  removeProduct,
};

export default connect(null, mapDispatchToProps)(Item);
