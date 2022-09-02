import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToken} from "./selectors";
import {Input} from "@mui/material";
import Button from "@mui/material/Button";

const Token = () => {
	const token = useSelector(addToken);
	const dispatch = useDispatch();
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users/')
			.then(response=>response.json())
			.then(data=>setUsers(data))
			.catch(err=>setError(err))
	}, [])
	console.log(users)
	function handleSelect(id) {
		const obj = users.filter((item)=>item.id === id);
		dispatch({type: 'addToken', payload: {name: obj.name, username: obj.username, email: obj.email}});
	}
	return (
		<>
			{users.map((item) => {
				return <Button onClick={()=>handleSelect(item.id)} key={item.id}>
					{item.username}
				</Button>
			})}
			{error && <h1>{error}</h1>}
			<h2>{token}</h2>
		</>
	);
};

export default Token;