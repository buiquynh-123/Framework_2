import "./App.css";

// import Counter from "./components/Counter";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div>
      <div className="w-96 mx-auto border">
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;
