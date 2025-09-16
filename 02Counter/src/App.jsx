import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // let counter = 15;

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log("counter", counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
    console.log("counter", counter);
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increment value</button>
      <br />
      <button onClick={removeValue}>Decrement value</button>
    </>
  );
}

export default App;
