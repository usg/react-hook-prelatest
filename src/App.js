import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);
  const preCountUseRef = useRef();

  useEffect(() => {
    latestCount.current = count; // 最近一次的值
    preCountUseRef.current = count; // 前一次的值
  }, [count]);

  function handleAlertClick() {
    console.log("clicked on pre111:" + preCountUseRef.current);
    setTimeout(() => {
      console.log("clicked on old:" + count);
      console.log("clicked on pre:" + preCountUseRef.current);
      console.log("clicked on latest:" + latestCount.current);
      alert(latestCount.current);
    }, 3000);
  }

  return (
    <div>
      <p>you clicked {count} times </p>
      <p>you clicked pre:{preCountUseRef.current} times </p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
      <button onClick={handleAlertClick}>Show alert </button>
    </div>
  );
};

export default App;
