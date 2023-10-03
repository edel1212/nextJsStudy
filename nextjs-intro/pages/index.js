import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter {count}</h2>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev + 1;
          })
        }
      >
        up
      </button>
      <button
        onClick={() =>
          setCount((prev) => {
            return prev - 1;
          })
        }
      >
        down
      </button>
    </>
  );
}
