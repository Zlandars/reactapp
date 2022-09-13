import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {logOut} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import MegaLink from "./MegaLink";

const Header = () => {
	const state = useSelector(state => state.Reducer.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<header className="header">
			<Link to={'/'} className={'logo'}></Link>
			<MegaLink to={'/profile'}>Profile</MegaLink>
			{state ? '' : <MegaLink to={'/signup'}>Registration</MegaLink>}
			{state ? <Button onClick={() => {
				dispatch(logOut())
			}}>{state.email}</Button> : <Button onClick={() => {
				navigate('/signin');
			}}>ВОЙТИ</Button>}
		</header>
	);
};

export default Header;