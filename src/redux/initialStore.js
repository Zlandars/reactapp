import {createStore} from "redux";
import {messageReducer} from "./reducers/message";

 export const InitialStore = createStore(messageReducer);

