import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../redux/reducers/token";
import {activeUser, getUsersList} from "./selectors";
import Button from "@mui/material/Button";
import {ADD_USER} from "../redux/ActionType";

export const Token = () => {
	const actualUser = useSelector(activeUser);
	const dispatch = useDispatch();
	const users = useSelector(getUsersList);
	function handleSelect(id) {
		const obj = users.filter((item)=>item.id === id).shift();
		dispatch({type: ADD_USER, payload: {id: obj.id, name: obj.name, username: obj.username, email: obj.email}});
	}
	useEffect(()=>{
		dispatch(getUsers())
	},[])

	return (
		<>
			{users.map((item) => {
				return <Button onClick={()=>handleSelect(item.id)} key={item.id} >{item.username} {item.id === actualUser.id && <p>isActive</p>}</Button>
			})}
		</>
	);
};