import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Users> </Users>
    </div>
  );
}

function Users() {
  //using UseState Hook
  const [counter, setCounter] = useState(55);

  //Calling setCounter auto function from useState
  function handleIncrease() {
    setCounter(counter + 1);
  }
  //calling setCounter auto function from useState
  function handleDecrease() {
    setCounter(counter - 1);
  }

  return (
    <div className="counterDiv">
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>

      <h1>{counter}</h1>
    </div>
  );
}

//Easiest way to make a counter
