import React, {useState} from "react";
import {green, purple, red} from "@mui/material/colors";
import {Link, Route, Routes} from "react-router-dom";
import MessageList from "./components/MessageList";
import ChatList from "./components/ChatList";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import {createTheme, ThemeProvider} from "@mui/material";
import {chats, ChatContext} from "./Context";

import {useSelector} from "react-redux";
import {isError, isLoading} from "./components/selectors";
import Error from "./components/Error";
import Button from "@mui/material/Button";


const theme = createTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: green[500],
		},
		warning: {
			main: red[500],
		}
	},
});

function App() {
	const [chatList, setChatList] = useState(chats);

	const allData = useSelector(state => state);
	const loading = useSelector(isLoading);
	const error = useSelector(isError);
	if (loading || error) return <Error />;
	return (
		<ThemeProvider theme={theme}>
			{/*<Counter />*/}

			<ChatContext.Provider value={{
				chats: chatList,
				handleAdd: (message) => {
					setChatList(
						[
							...chatList, {
							id: Math.random(),
							author: message.author,
							msg: message.msg,
						}
						])
				}
			}}>
				<Link to={'/'}>ChatList</Link>
				<Link to={'/profile'}>Profile</Link>
				<div className="mainBlock">
					<Button onClick={()=>{
						console.log(allData)
					}}>LOG ALL DATA</Button>

				<div className="mainBlock">
					<Link to={'/'}>ChatList</Link>
					<Link to={'/profile'}>Profile</Link>

					<Routes>
						<Route path={'/'} element={<ChatList/>}/>
						<Route path={'/chat/:id'} element={<MessageList/>}/>
						<Route path={'/profile'} element={<Profile/>}/>
						<Route path={'*'} element={<PageNotFound/>}/>
					</Routes>
				</div>
			</ChatContext.Provider>

		</ThemeProvider>
	);
}

export default App;
