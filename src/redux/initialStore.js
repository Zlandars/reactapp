import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./reducers/message";
import {chatReducer} from "./reducers/chats";
import {tokenReducer} from "./reducers/token";
// import storage from "redux-persist/lib/storage"
// import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

// const persistConfig =  {
// 	key: 'root',
// 	storage
// }

// const logger = store => next => action => {
// 	console.log('dispatching', action);
// 	console.log('before', store.getState());
// 	const delay = action.meta;
//
// 	if (action.type === 'deleteMessage') {
// 		if (store.getState().tokenReducer.name === store.getState().chatReducer.chatList[action.meta - 1].chatOwner) return next(action);
// 		return store.getState();
// 	}
// 	if (!delay) {
// 		return next(action);
// 	}
// 	const timeout = setTimeout(() => {
// 		next(action);
// 	}, delay);
// 	return () => {
// 		clearTimeout(timeout);
// 	}
// };



const combineReducer = combineReducers({messageReducer, chatReducer, tokenReducer})

// const persistedReducer = persistReducer(persistConfig, combineReducer);
export const InitialStore = createStore(combineReducer, applyMiddleware(thunk));
// export const persist = persistStore(InitialStore);