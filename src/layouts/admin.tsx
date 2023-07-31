import { Outlet } from "react-router-dom";
const LayoutAdmin = () => {
  return (
    <div>
      <div>
        <ul>
          <li>Dashboard</li>
          <li>Product</li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
