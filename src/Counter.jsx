import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const increment = () => {
		dispatch({ type: 'INC' });
	}
	const decrement = () => {
		dispatch({ type: 'DEC' });
	}
    const double = () => {
        console.log("counter", counter);
        dispatch({type: "DOUBLE", payload: counter})
    }
	return (
		<div>
			<div>Counter: {counter}</div>
			<div>
				<button onClick={increment}> + </button>
				<button onClick={decrement}> - </button>
				<button onClick={double}> 2x </button>
			</div>
		</div>
	);
}

export default Counter;
