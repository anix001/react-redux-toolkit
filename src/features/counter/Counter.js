import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll =()=>{
    setIncrementAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button disabled={count >=1 ? false : true} onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type="text" value={incrementAmount} onChange={(e)=> setIncrementAmount(e.target.value)}/>
      <button onClick={()=> dispatch(incrementByAmount(addValue))}>Add amount</button>
      <button onClick={resetAll}>Reset All</button>
    </section>
  );
};

export default Counter;
