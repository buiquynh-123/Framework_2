import { SetStateAction, useReducer, useState } from "react";
import { initialState, productReducer } from "@/reducers/productReducer";
type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ onChange }: InputProps) => {
  return <input className="border border-red-500" onChange={onChange} />;
};

export default Input;
