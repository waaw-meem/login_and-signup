import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tokenn, increment } from './counterSlice'
import { chk,setGlobalState, useGlobalState } from './Config';
import { useEffect, useState } from "react";
//import './Config';
//import globeVar from "./GlobalVar";
//let chk = 0;
export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const token2 = useGlobalState('token2');
  
  const changeStatus = () =>{
    //setGlobalState('token2',e.target.value)
    setGlobalState('token2',2)
    chk = 5;
  }





  const [count2, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem('count2')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('count2', count2);
  }, [count2]);

  const increaseCount = () => {
    return setCount(count2 + 1);
  }
  const decreaseCount = () => {
    return setCount(count2 - 1)
  }
  
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <center><span>{count}</span></center>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(tokenn())}
        >
          Decrement
        </button>
        <h2>{token2}</h2>
        {chk}
        <button onClick={changeStatus}>ok</button>


        <h1> Count {count2} </h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      </div>
    </div>
  )
}

export default Counter;