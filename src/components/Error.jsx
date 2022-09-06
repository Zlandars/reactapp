import React from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/reducers/token";


const Error = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state)
	return (
		<>
			<Button onClick={()=> console.log(state)}> LOG </Button>
			<Button onClick={()=> dispatch(getUsers)}> isLoading : 0 </Button>
			{state.tokenReducer.error && <h1>{state.tokenReducer.error}</h1>}
			{state.tokenReducer.loading && <h1>Загрузка данных</h1>}
		</>
	);
};

export default Error;