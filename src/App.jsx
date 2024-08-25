import { useState } from "react";
import './App.css';  // Import the CSS file

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter your name"
        className="input-field"
      />
      <div className="counter">
        <button onClick={increment} className="button">+</button>
        <span className="count">{count}</span>
        <button onClick={decrement} className="button">-</button>
      </div>
      <h1 className="greeting">My name is {input || "Unknown"} and age is {count}</h1>
    </div>
  );
}

export default App;
