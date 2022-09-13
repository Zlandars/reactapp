import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedRoute = ({children}) => {
	const user = useSelector(state => state.Reducer.currentUser)
	const navigate = useNavigate();
	const [timer, setTimer] = useState(5);
	useEffect(()=>{
		if(user){
			let interval = setInterval(()=>{
				setTimer(timer - 1)
			}, 1000)
			clearInterval(interval);
			navigate('/')
		}
	}, [navigate, user])
	return (
		<div>
			{children}
		</div>
	);
};

export default ProtectedRoute;