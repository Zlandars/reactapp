import React, {useEffect, useState} from 'react';
import {
	TextField,
	List,
	ListItem,
	ListItemText,
	Avatar,
	ListItemAvatar,
	Typography,
	Divider,
} from "@mui/material";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {addChatList} from "./selectors";
import {ADD_CHAT, DELETE_CHAT} from "../redux/ActionType";

const ChatList = () => {
	const chats = useSelector(addChatList);
	const [chatName, setChatName] = useState('');
	const [chatDescr, setChatDescr] = useState('');
	const dispatch = useDispatch();
	const formEl = useRef(null);
	const [chatList, setChatsList] = useState([
		{
			id: 1,
			chatAuthor: 'Evgen',
			lastMessage: {
				id: 2,
				author: "Evgen",
				msg: "e.target.value1",
			}
		},
		{
			id: 2,
			chatAuthor: 'Voovke',
			lastMessage: {
				id: 2,
				author: "Vovke",
				msg: "e.target.value2",
			}
		}
	]);

	const chatId = chats.length + 1;
	const addChat = () => {
		const obj = {
			chat_id: chatId,
			chatOwner: chatName,
			chatDescription: chatDescr,
		};
		dispatch({type: ADD_CHAT, payload: obj});
	}
	function handleDelete(id) {
		dispatch({type: DELETE_CHAT, payload: id});
	}
	useEffect(()=>{
		document.title = 'ChatList';
	},[])
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				bgcolor: "background.paper",
				flexGrow: 1,
			}}
		>
			{ chats.map((item) => {
				return <div key={item.chat_id}>
					<ListItem alignItems="flex-start">
						<Link to={`/chat/${item.chat_id}`}>
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary={item.chatOwner}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
										</Typography>
										{item.chatDescription}
									</React.Fragment>
								}
							/>
						</Link>
						<Button onClick={()=>{handleDelete(item.chat_id)}} >X</Button>
					</ListItem>
					{ item.chat_id !== chats.length - 1 && <Divider variant="inset" component="li" /> }
				</div>
			})}
			<Box
				component="form"
				noValidate
				autoComplete="off"
				mt={4}
				display="flex"
				flexDirection="column"
				onSubmit={(event) => {
					event.preventDefault();
					event.target.author.value = "";
				}}
			>
				<TextField
					id="name"
					label="Создатель чата"
					variant="outlined"
					sx={{ mb: 2 }}
					name="author"
					onChange={(e)=> {
						setChatName(e.target.value);
					}}
				/>
				<TextField
					id="name"
					label="Описание чата"
					variant="outlined"
					sx={{ mb: 2 }}
					name="description"
					onChange={(e)=> {
						setChatDescr(e.target.value);
					}}
				/>
				<Button
					variant="outlined"
					size="small"
					type="submit"
					sx={{ mb: 4 }}
					onClick={() => addChat()}
				>
					Отправить
				</Button>
			</Box>
		</List>
	);
};

export default ChatList;