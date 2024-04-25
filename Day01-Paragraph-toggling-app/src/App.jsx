import { useState } from "react";
import "./App.css";
const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <p>
        {isVisible &&
          "useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it."}
      </p>
      {""}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide paragraph" : "Show paragraph"}
      </button>
    </div>
  );
};

export default App;
