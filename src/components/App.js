import React from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import MessageList from "../pages/MessageList";
import ChatList from "../pages/ChatList";
import PageNotFound from "../pages/PageNotFound";
import Profile from "../pages/Profile";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../redux/actions";
import Error from "./Error";

function App() {
	const state = useSelector(state => state.Reducer.currentUser);
	const loading = useSelector(state =>state.Reducer.loading);
	const error = useSelector(state => state.Reducer.error);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	if (loading || error) return <Error />
	return (
			<div className={'mainBlock'}>
				<div className="header">
					<Link to={'/'}>ChatList</Link>
					<Link to={'/profile'}>Profile</Link>
					{state ? '' : <Link to={'/signup'}>Registration</Link>}
					{state ? <Button onClick={()=>{
							dispatch(logOut())
						}}>{state.email}</Button> : <Button onClick={()=>{
						navigate('/signin');
					}}>ВОЙТИ</Button>}
				</div>
				<div className="content">
					<Routes>
						<Route path={'/'} element={<ChatList/>}/>
						<Route path={'/chat/:id'} element={<MessageList/>}/>
						<Route path={'/profile'} element={<Profile/>}/>
						<Route path={'/signin'} element={<SignInPage/>}/>
						<Route path={'/signup'} element={<SignUpPage/>}/>
						<Route path={'*'} element={<PageNotFound/>}/>
					</Routes>
				</div>
			</div>
	);
}

export default App;
