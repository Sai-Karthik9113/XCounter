import React, { useState } from "react";
// import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value+1);
  }

  const handleDecrement = () => {
    setValue(value-1);
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <div className="contollers">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
