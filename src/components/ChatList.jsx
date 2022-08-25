import React, {useState} from 'react';
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
import {addList} from "./selectors";

const ChatList = () => {
	const message = useSelector(addList)
	const [chatName, setChatName] = useState('');
	const [chatDescr, setChatDescr] = useState('');
	const dispatch = useDispatch();

	const keys = Object.keys(message);
	const chatId = keys[keys.length - 1]+1;
	const addChat = () => {
		const obj = {
			[chatId]: [{
				chatOwner: chatName,
				chatDescription: chatDescr
			}],
		};
		dispatch({type: 'addChat', payload: obj});
	}
	function handleDelete(id) {
		delete message[id];
		dispatch({type: 'addChat', payload: message});
	}
	return (
		<List
			sx={{
				width: "100%",
				maxWidth: 360,
				bgcolor: "background.paper",
				flexGrow: 1,
			}}
		>
			{ keys.map(item => {
				return <div key={item}>
					<ListItem alignItems="flex-start">
						<Link to={`/chat/${item}`}>
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary={message[item][0].chatOwner}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
										</Typography>
										{message[item][0].chatDescription}
									</React.Fragment>
								}
							/>
						</Link>
						<Button onClick={()=>{handleDelete(item)}} >X</Button>
					</ListItem>
					{ item !== keys.length - 1 && <Divider variant="inset" component="li" /> }
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
					onClick={addChat}
				>
					Отправить
				</Button>
			</Box>
		</List>
	);
};

export default ChatList;