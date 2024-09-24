import { useState } from "react";
import "./App.css";
import { cn } from "./lib/utils";

function App() {
  const [count, setCount] = useState(0);

  const classes = cn("text-red-500", { "bg-blue-500": count > 0 });

  return (
    <>
      <h1 className="mb-10 text-center text-3xl font-bold">Portfolio</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p className={cn(classes, "pt-11")}>test</p>
    </>
  );
}

export default App;
