import { Button, Form } from "antd";
import Input from "antd/es/input/Input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hook";
import { addProduct } from "@/action/product";
import { useState } from "react";
import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().trim().required(),
  description: Joi.string().trim(),
  price: Joi.number().positive().required(),
});
const ProductAdd = () => {
  const [errors, setErrors] = useState<{
    name?: string;
    description?: string;
    price?: number;
  }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      dispatch(addProduct(values));
      alert("Thêm sản phẩm thành công");
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    }

    console.log(values);
  }

  function onFinishFailed(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <h1 className="mt-5 text-3xl font-semibold text-center text-black md:ml-16 md:text-left dark:text-white">
        Thêm sản phẩm
      </h1>
      <div className="bg-white dark:bg-[#38383B] p-10 md:w-[90%] md:ml-16 sm:mx-auto mx-2 mt-5 shadow-lg rounded ">
        <Form
          className="w-4/5 dark:text-white"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label={
              <span className="text-base dark:text-white">Tên sản phẩm</span>
            }
            name="name"
            validateStatus={errors?.name ? "error" : ""}
            help={errors?.name}
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
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
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>

          <Form.Item
            label={<span className="text-base dark:text-white">Mô tả</span>}
            name="description"
            validateStatus={errors?.description ? "error" : ""}
            help={errors?.description}
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
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

export default ProductAdd;
