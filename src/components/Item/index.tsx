import { removeProduct } from "@/action/product";
import { Button } from "@/components";
import { IProduct } from "@/interface/Product";
import { GoTrash } from "react-icons/go";
import { useSelector } from "react-redux";
const Item = () => {
  const products = useSelector((state: any) => state.product.products);
  const handleRemove = (id: any) => {
    removeProduct(id);
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
            <Button danger>update</Button>
          </li>
        );
      })}
    </>
  );
};

export default Item;
