import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";


const Counter = () => {
	const count = useSelector(state => state);
	const dispatch = useDispatch();
	return (
		<>
			<Button sx={{display: 'block', margin: '50px auto'}} onClick={() => {
				dispatch({type: 'minus'})
			}}>- {count.count}</Button>
			<Button sx={{display: 'block', margin: '50px auto'}} onClick={() => {
				dispatch({type: 'plus'})
			}}>+ {count.count}</Button></>

	);
};

export default Counter;