import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BaseLayout from "./layouts/base";
import LayoutAdmin from "./layouts/admin";
import ProductAdd from "./pages/admin/productAdd";
import ProductList from "./pages/admin/productList";
import ProductEdit from "./pages/admin/productEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<HomePage />}></Route>
      </Route>

      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<ProductList />}></Route>
        <Route path="products/add" element={<ProductAdd />}></Route>
        <Route path="products/:id/edit" element={<ProductEdit />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
