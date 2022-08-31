import {combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chats";
import {messageReducer} from "./reducers/messages";

const reducer = combineReducers(chatReducer, messageReducer);

 export const InitialStore = createStore(reducer);

