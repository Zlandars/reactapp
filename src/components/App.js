import React from "react";
import {Route, Routes} from "react-router-dom";
import MessageList from "../pages/MessageList";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Profile from "../pages/Profile";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import {useSelector} from "react-redux";
import Error from "./Error";
import Header from "./Header";

function App() {
	const loading = useSelector(state => state.Reducer.loading);
	const error = useSelector(state => state.Reducer.error);

	if (loading || error) return <Error/>
	return (
		<div className={'mainBlock'}>
			<Header/>
			<div className="content">
				<Routes>
					<Route path={'/'} element={<HomePage/>}/>
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
