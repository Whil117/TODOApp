import { useState } from "react";

const CountHook = (value=10) => {
  const [state, setstate] = useState(value);

  const handleSum = (factor:number):void => {
    setstate(state + factor);
  };
  const handleReset = ()=>{
      setstate(value)
  }
  const handleSub = (factor:number):void =>{
      setstate(state - factor)
  }
  return [state,handleReset,handleSum,handleSub]
};


export default CountHook;
