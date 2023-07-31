import Cart from "../Cart";
const ProductList = () => {
  const productList = [
    {
      id: 1,
      name: "Sản phẩm A",
    },
    {
      id: 2,
      name: "Sản phẩm B",
    },
    {
      id: 3,
      name: "Sản phẩm C",
    },
    {
      id: 4,
      name: "Sản phẩm D",
    },
  ];
  return (
    <div className="flex justify-between mt-5">
      {productList.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>
              <button>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
