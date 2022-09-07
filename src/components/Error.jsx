import React from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/reducers/token";
import {IS_LOADING} from "../redux/ActionType";


const Error = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state)
	return (
		<>
			<Button onClick={()=> console.log(state)}> LOG STATE </Button>
			<Button onClick={()=> dispatch({type:IS_LOADING})}> isLoading</Button>
			<Button onClick={()=> dispatch(getUsers)}> getUsers()</Button>

			{state.tokenReducer.error && <h1>{state.tokenReducer.error}</h1>}
			{state.tokenReducer.load && <h1>Загрузка данных</h1>}
		</>
	);
};

export default Error;