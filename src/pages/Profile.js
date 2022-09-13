import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {addUser, deleteUser, getUsers, updateUser} from "../redux/reducers/token";
import {activeUser, getUsersList} from "../components/redux/selectors";
import {ACTIVE_USER} from "../redux/ActionType";


const Profile = () => {
	const [changeUser, setChangeUser] = useState(false);
	const actualUser = useSelector(activeUser);
	const dispatch = useDispatch();
	const users = useSelector(getUsersList);
	const keys = Object.keys(users);
	function handleSelect(id) {
		const obj = users[id];
		dispatch({type: ACTIVE_USER, payload: {id: id, name: obj.name, username: obj.username, email: obj.email}});
	}
	useEffect(() => {
		dispatch(getUsers())
		document.title = 'ChangeProfile';
	}, [])
	const [user, setUser] = useState(
		{
			id: '',
			name: '',
			username: '',
			email: '',
			address: '',
			phone: '',
		}
	);
	const handleSubmit = (e) => {
		const {name,value} = e.target;
		setUser({...user, [name]: value})
	};
	const handleCreate = (e) => {
		e.preventDefault();
		if (user.id) return handleUpdate();
		if (user.name && user.email && user.phone && user.username) return dispatch(addUser(user));
	}
	const handleUpdate = () => {
		if (user.id) return dispatch(updateUser(user));
	}
	const handleDelete = (id) => {
		dispatch(deleteUser(id))
	}
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<h2>Create profile</h2>
			<form onClick={handleCreate}>
				<table>
					<thead>
						<tr style={{width: '100vw', display: 'flex', justifyContent: "space-around"}}>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{width: '100vw', display: 'flex', justifyContent: "space-around"}}>
							<td><input onChange={handleSubmit} name={'name'} value={user.name} required={true}></input></td>
							<td><input onChange={handleSubmit} name={'username'} value={user.username} required={true}></input></td>
							<td><input onChange={handleSubmit} name={'email'} value={user.email} required={true}></input></td>
							<td><input onChange={handleSubmit} name={'address'} value={user.address}></input></td>
							<td><input onChange={handleSubmit} name={'phone'} value={user.phone} required={true}></input></td>
						</tr>
					</tbody>
				</table>
				<Button sx={{display: 'flex', margin: 'auto'}}>Submit</Button>
			</form>

			{ changeUser && <Button sx={{display: 'flex', margin: 'auto'}} onClick={handleUpdate}>Применить изменения</Button>}
			<h2>Chat profile</h2>
			{keys.map((key) => {
				return <div  key={key}>
					<Button onClick={()=>handleSelect(key)}>{users[key].username} {key === actualUser.id && <p>:isActive</p>}</Button>
					<Button onClick={()=> {

						setUser({...users[key], id: key});
						if (!changeUser) return setChangeUser(true);
						setUser(null)
						setChangeUser(false);
					}}>Редактировать</Button>
					<Button onClick={()=>handleDelete(key)}>X</Button>
				</div>
			})}
			<Button onClick={()=>console.log(user)}>CONSOLE>LOG</Button>
		</div>
	);
};

export default Profile;