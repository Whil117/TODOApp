import React from "react";
import CountHook from "./hooks/CountHook";

const CounterHookCustom = () => {
  const [count,handleReset, handleSum, handleSubs] = CountHook(100);
  return (
  <div>
       <h1>my count is: {count}</h1>
       <button onClick={()=>handleSum(2)}>+1</button>
       <button onClick={handleReset}>Reset</button>
       <button onClick={()=>handleSubs(2)}>-1</button>

  </div>);
};

export default CounterHookCustom;
