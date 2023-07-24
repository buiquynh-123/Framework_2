import { Button, Input } from "..";
import { AiOutlinePlus, AiFillCamera } from "react-icons/ai";
import { SetStateAction, useState } from "react";
import { addProducts } from "@/action/product";
const Form = () => {
  const [valueInput, setValueInput] = useState("");
  const handleChangeValue = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValueInput(e.target.value);
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
      <Button type="primary" icon={<AiOutlinePlus onClick={onSubmit} />} />
    </form>
  );
};

export default Form;
