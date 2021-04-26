import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
  
} from "../Store/counterSlice";
import { fetchUserById } from "../Store/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [inc,setInc] =useState();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span >{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input onChange={(e) => setInc(e.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(Number(inc)))}>
          Add by value
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>

        <button onClick={() => dispatch(fetchUserById())}>Async thunk </button>
      </div>
    </div>
  );
}