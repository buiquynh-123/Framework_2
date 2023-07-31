const Cart = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên sản phẩm</th>
          <th>Giá sản phẩm</th>
          <th>Số lượng</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sản phẩm A</td>
          <td>10000</td>
          <td>2</td>
          <td className="flex">
            <button className="mx-2">+</button>
            <p>1</p>
            <button className="mx-2">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
