import {createContext} from "react";

export const chats = [{
			id: 1,
			author: "Evgen",
			msg: "1123",
		},
];
export const ChatContext = createContext({chats: chats, handleAdd: ()=>{}});