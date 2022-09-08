import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate} from "../redux/actions";
import {useNavigate} from "react-router-dom";

const SignInPage = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) return;
		dispatch(loginInitiate(email,password))
	}
	const user = useSelector(state => state.Reducer.currentUser);
	const navigate = useNavigate();
	useEffect(()=>{
		if(user){
			navigate('/');
		}
	}, [navigate, user])
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor={'email'}>email</label>
				<input type={'email'} id={'email'} onChange={(e)=>{
					setEmail(e.target.value);
				}} value={email} />
				<label htmlFor={'password'}>password</label>
				<input type={'password'} id={'password'} onChange={(e)=>{
					setPassword(e.target.value);
				}} value={password} />
				<Button type={'submit'}>SignIn</Button>
			</form>
		</div>
	);
};

export default SignInPage;