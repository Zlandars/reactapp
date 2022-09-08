import React from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/reducers/token";
import {useNavigate} from "react-router-dom";


const Error = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	const navigate = useNavigate();
	return (
		<>
			<Button onClick={()=> navigate('/')}> HomePage </Button>
			<Button onClick={()=> dispatch(getUsers)}> getUsers()</Button>

			{state.Reducer.error && <h1>{state.Reducer.error}</h1>}
			{state.Reducer.loading && <h1>Загрузка данных</h1>}
		</>
	);
};

export default Error;