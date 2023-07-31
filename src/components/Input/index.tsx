/* eslint-disable @typescript-eslint/no-explicit-any */
type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ onChange }: InputProps) => {
  return <input className="border border-red-500" onChange={onChange} />;
};

export default Input;
