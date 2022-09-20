import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import AddUser from "./components/pages/AddUser/AddUser";
import Home from "./components/pages/Home/Home";


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <AddUser/>
      <Home />
    </div>
  );
}

export default App;
