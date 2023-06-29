type Props = {
  primary?: boolean;
  danger?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
};
const Button = ({ children, primary, danger, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 border border-gray-400 rounded ${
        primary && "bg-blue-500 text-white"
      } ${danger && "bg-red-500 text-white"}`}
    >
      {children}
    </button>
  );
};

export default Button;
