import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerInitiate} from "../redux/actions";

const SignUpPage = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [passwordConfirm, setPasswordConfirm] = useState();
	const [displayName, setDisplayName] = useState();
	const dispatch = useDispatch();
	const user = useSelector(state => state.Reducer.currentUser);
	const navigate = useNavigate();
	useEffect(()=>{
		if(user){
			setTimeout(()=>{
				navigate('/');
			}, 5000)
		}
	}, [navigate, user])
	function handleChange(e) {
		switch (e.id) {
			case 'email':
				setEmail(e.value);
				break;
			case 'password':
				setPassword(e.value);
				break;
			case 'passwordConfirm':
				setPasswordConfirm(e.value);
				break;
			case 'displayName':
				setDisplayName(e.value);
				break;
			default:
				break;

		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if(password !== passwordConfirm) return;
		dispatch(registerInitiate(email,password,displayName))
	}
	return (
		<div>
			<Link to={'/signin'}>SignIn</Link>
			<form onSubmit={handleSubmit}>
				<label htmlFor={'email'}>email</label>
				<input type={'email'} id={'email'} onChange={(e)=>{
					handleChange(e.target);
				}} value={email} />
				<label htmlFor={'password'}>password</label>
				<input type={'password'} id={'password'} onChange={(e)=>{
					handleChange(e.target);
				}} value={password} />
				<label htmlFor={'passwordConfirm'}>passwordConfirm</label>
				<input type={'password'} id={'passwordConfirm'} onChange={(e)=>{
					handleChange(e.target);
				}} value={passwordConfirm} />
				<label htmlFor={'displayName'}>displayName</label>
				<input id={'displayName'} onChange={(e)=>{
					handleChange(e.target);
				}} value={displayName} />
				<Button type={'submit'}>SignUp</Button>
			</form>
		</div>
	);
};

export default SignUpPage;