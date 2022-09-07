import {ADD_MESSAGE, DELETE_MESSAGE} from "../ActionType";

const initialState = {
	messageList: [
		{
			id: 1,
			chat_id: 1,
			author: "Evgen",
			msg: "message evgen",
		}, {
			id: 2,
			chat_id: 2,
			author: "Voovke",
			msg: "message voovke",
		}
	]
};

export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				messageList: [
					...state.messageList,
					action.payload
				]
			}
		}
		case DELETE_MESSAGE: {
			return {
				...state,
				messageList: [
					...state.messageList.filter((item) => {
						return item.id !== action.payload;
					})
				]
			}
		}
		default: {
			return state;
		}
	}
}