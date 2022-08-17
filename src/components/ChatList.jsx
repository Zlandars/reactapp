import React, {useRef, useState} from 'react';
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

const ChatList = () => {
	const formEl = useRef(null);
	const [chatList, setChatsList] = useState([
		{
			id: 1,
			chatAuthor: 'Evgen',
			lastMessage: {
				id: 2,
				author: "Vovke",
				msg: "e.target.value",
			}
		}
	]);

	function handleDelete(id) {
		return setChatsList(chatList.filter(item => item.id !== id));
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
			{chatList.map((item, index, array) => {
				return <div key={item.id}>
					<ListItem alignItems="flex-start">
						<Link to={`/chat/${item.id}`}>
							<ListItemAvatar>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
							</ListItemAvatar>
							<ListItemText
								primary={item.chatAuthor}
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											{item.lastMessage.author}
										</Typography>
										{item.lastMessage.msg}
									</React.Fragment>
								}
							/>
						</Link>
						<Button onClick={()=>{handleDelete(item.id)}} >X</Button>
					</ListItem>
					{ index !== array.length - 1 && <Divider variant="inset" component="li" /> }
				</div>
					;
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
					setChatsList(prev => [
						...prev,
						{
							id: prev.length + 1,
							chatAuthor: event.target.author.value,
							lastMessage: {},
						},
					]);

					event.target.author.value = "";
				}}
			>
				<TextField
					id="name"
					label="Создатель чата"
					variant="outlined"
					sx={{ mb: 2 }}
					name="author"
					inputRef={formEl}
				/>
				<Button
					variant="outlined"
					size="small"
					type="submit"
					sx={{ mb: 4 }}
				>
					Отправить
				</Button>
			</Box>
		</List>
	);
};

export default ChatList;