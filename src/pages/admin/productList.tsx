/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Space, Table } from "antd";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import { getProduct, removeProduct } from "@/action/product";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const ProductList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "key",
      key: "key",
      render: (_, record: any) => (
        <Space size="middle">
          <Button
            onClick={() => {
              deleteProduct(record.id.toString() ?? "");
            }}
          >
            Delete
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/admin/products/${record.id}/edit`);
            }}
          >
            Edit
          </Button>
        </Space>
      ),
    },
  ];
  const { products, isLoading, error } = useAppSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const deleteProduct = (id: number) => {
    console.log(id);
    confirm("Bạn có thực sự muốn xóa") ? dispatch(removeProduct(id)) : "";
  };
  return (
    <>
      <h1 className="md:ml-16 md:text-left text-center mt-5 text-3xl font-semibold dark:text-white text-black">
        Danh sách sản phẩm
      </h1>
      <div className="md:ml-14 md:text-left text-center my-2 text-3xl font-semibold">
        <button>Thêm sản phẩm</button>
      </div>
      <Table
        columns={columns}
        dataSource={products}
        className=" bg-white md:w-[90%] md:ml-16 sm:mx-auto mx-2 rounded-md mt-5 border border-[#f0f0f0] w-[600px] overflow-x-scroll z-0"
      />
    </>
  );
};

export default ProductList;
