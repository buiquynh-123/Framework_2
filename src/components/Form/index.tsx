/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { SetStateAction, useState } from "react";
import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";
import { connect, useSelector } from "react-redux";
// eslint-disable-next-line react-refresh/only-export-components

import { addProducts } from "@/action/product";

const Form = ({ addProducts }: any) => {
  const product = useSelector((state: any) => state.products.productItem);

  const [valueInput, setValueInput] = useState("");

  const handleChangeValue = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    if (product) {
      setValueInput(e.target.value);
    } else {
      setValueInput(e.target.value);
    }
    console.log(valueInput);
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (valueInput) {
      const newData = {
        name: valueInput,
      };
      await addProducts(newData);
      setValueInput("");
    }
  };

  return (
    <form className="border-b mb-3 p-3 flex justify-between items-center">
      <Input onChange={handleChangeValue} />
      <Button primary>
        <AiOutlinePlus onClick={onSubmit} />
      </Button>
      {/* {state.productItem.name ? (
        <Button>
          <p onClick={onSubmit}>Update</p>
        </Button>
      ) : (
        <Button primary>
          <AiOutlinePlus onClick={onHandleUpdate} />
        </Button>
      )} */}
    </form>
  );
};

const mapDispatchToProps = {
  addProducts,
};
export default connect(null, mapDispatchToProps)(Form);
