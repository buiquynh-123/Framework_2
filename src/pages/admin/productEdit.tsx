import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import Input from "antd/es/input/Input";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProductById, updateProduct } from "@/action/product";
import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim(),
  price: Joi.number().positive().required(),
});
const ProductEdit = () => {
  const [errors, setErrors] = useState<{
    name?: string;
    description?: string;
    price?: number;
  }>();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(id);
  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  const { product } = useAppSelector((state: any) => state.products);
  console.log(product);
  useEffect(() => {
    setFields();
  }, [product]);
  const [form] = Form.useForm();
  const setFields = () => {
    form.setFieldsValue({
      id: product?.id,
      name: product?.name,
      description: product?.description,
      price: product?.price,
    });
  };

  function onFinish(values: any): void {
    const { error } = productSchema.validate(values);
    if (error) {
      const errorObj: any = {};
      error.details.forEach((detail) => {
        const key = detail.path[0];
        errorObj[key] = detail.message;
      });
      setErrors(errorObj);
    } else {
      console.log(values);
      dispatch(updateProduct(values));
      setTimeout(() => {
        alert("Sửa sản phẩm thành công");
        navigate("/admin");
      }, 2000);
    }
  }

  function onFinishFailed(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <h1 className="mt-5 text-3xl font-semibold text-center text-black md:ml-16 md:text-left dark:text-white">
        Sửa sản phẩm
      </h1>
      <div className="bg-white dark:bg-[#38383B] p-10 md:w-[90%] md:ml-16 sm:mx-auto mx-2 mt-5 shadow-lg rounded ">
        <Form
          className="w-4/5 dark:text-white"
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label=""
            name="id"
            style={{ display: "none" }} // ẩn input này đi
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base dark:text-white">Tên sản phẩm</span>
            }
            name="name"
            validateStatus={errors?.name ? "error" : ""}
            help={errors?.name}
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input
              className="dark:hover:border-[#00c6ab] transition-colors duration-300"
              defaultValue={product?.name}
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-base dark:text-white">Giá sản phẩm</span>
            }
            name="price"
            validateStatus={errors?.price ? "error" : ""}
            help={errors?.price}
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}
          >
            <Input
              className="dark:hover:border-[#00c6ab] transition-colors duration-300"
              defaultValue={product?.price}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-base dark:text-white">Mô tả</span>}
            name="description"
            validateStatus={errors?.description ? "error" : ""}
            help={errors?.description}
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input
              className="dark:hover:border-[#00c6ab] transition-colors duration-300"
              defaultValue={product.description}
            />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="text-black transition-colors duration-300 dark:text-white"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ProductEdit;
