/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";

import { List } from "./components";
import Form from "./components/Form";
import { ProductProvider } from "./reducers/productReducer";
function App() {
  return (
    <div>
      <div className="w-96 mx-auto border">
        <ProductProvider>
          <Form />
          <List />
        </ProductProvider>
      </div>
    </div>
  );
}

export default App;
