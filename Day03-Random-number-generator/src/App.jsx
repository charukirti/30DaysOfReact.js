import { useState } from "react";

const App = () => {
  // initializing default states
  const [startRange, setStartRange] = useState(null);
  const [endRange, setEndRange] = useState(null);
  const [generate, setGenerate] = useState(null);

  // creating functions
  function handleClick() {
    if (
      isNaN(startRange) ||
      isNaN(endRange) ||
      startRange === null ||
      endRange === null
    ) {
      setGenerate("Invalid Input");
    } else {
      const randomNumber =
        Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
      setGenerate(randomNumber);
    }
  }

  return (
    <div>
      <input
        type="number"
        name=""
        id="startRange"
        placeholder="Enter Start Range..."
        onChange={(e) => setStartRange(parseInt(e.target.value))}
      />
      <input
        type="number"
        name=""
        id="endRange"
        placeholder="Enter End Range"
        onChange={(e) => setEndRange(parseInt(e.target.value))}
      />

      <button id="generate" onClick={handleClick}>
        Generate
      </button>
      <div id="randomNumber">{generate}</div>
    </div>
  );
};

export default App;
