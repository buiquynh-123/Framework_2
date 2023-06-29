import { SetStateAction, useContext, useReducer, useState } from "react";
import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";
import {
  ProductContext,
  initialState,
  productReducer,
} from "@/reducers/productReducer";
import { addCar } from "@/api/car";

const Form = () => {
  const [valueInput, setValueInput] = useState("");
  const { state, dispatch } = useContext(ProductContext);
  const handleChangeValue = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValueInput(e.target.value);
  };
  const onSubmit = async (e: { preventDefault: () => void }) => {
    console.log("submit đi");
    e.preventDefault();
    if (valueInput) {
      const newData = {
        name: valueInput,
      };
      await addCar(newData);

      dispatch({ type: "ADD_PRODUCT", payload: newData });
    }
    setValueInput("");
  };
  return (
    <form
      className="border-b mb-3 p-3 flex justify-between items-center"
      onSubmit={onSubmit}
    >
      <Input onChange={handleChangeValue} />
      <Button primary>
        <AiOutlinePlus />
      </Button>
    </form>
  );
};

export default Form;
