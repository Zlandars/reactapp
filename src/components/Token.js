import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToken} from "./selectors";
import {Input} from "@mui/material";
import Button from "@mui/material/Button";

const Token = () => {
	const token = useSelector(addToken);
	const [tokenState, setTokenState] = useState('');
	const dispatch = useDispatch();

	function handlerAdd() {
		dispatch({type: 'addToken', payload: tokenState});
	}

	return (
		<>
			<h2>{token}</h2>
			<Input onChange={(e) => setTokenState(e.target.value)}/>
			<Button onClick={handlerAdd}>Add</Button>
		</>
	);
};

export default Token;