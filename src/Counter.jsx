import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/counter';
import { userActions } from './store/users';

function Counter() {
	const {count} = useSelector((state) => state.counter);
	const {name, score} = useSelector(state=> state.user)
	const dispatch = useDispatch();
	const increment = () => {
		dispatch(actions.increment());
	}
	const decrement = () => {
		dispatch(actions.decrement());
	}
    const double = () => {
        dispatch(actions.double(count));
    }
	const updateUserName = ()=>{
		dispatch(userActions.updateName("Malik"));
	}

	useEffect(()=>{
		if(count > 10){
			dispatch(userActions.addScore());
		}
	},[count])
	return (
		<div>
			<div> User: {name}</div>
			<div> Total Scrore: {score} </div>
			<div>Counter: {count}</div>
			<div>
				<button onClick={increment}> + </button>
				<button onClick={decrement}> - </button>
				<button onClick={double}> 2x </button>
				<button onClick={updateUserName}> Update User</button>
			</div>
		</div>
	);
}

export default Counter;
