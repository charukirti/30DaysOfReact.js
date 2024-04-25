import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <h1 data-testid="counter">{count}</h1>
        <button
          data-testid="incrementButton"
          onClick={() => {
            setCount((prevCount) => prevCount + 3);
          }}
        >
          Increment 3 times
        </button>
      </div>
    </>
  );
};

export default App;
