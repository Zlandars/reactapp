import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "./reducers/message";
import {chatReducer} from "./reducers/chats";
import {tokenReducer} from "./reducers/token";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";

const persistConfig =  {
	key: 'root',
	storage
}

const logger = store => next => action => {
	console.log('dispatching', action);

	console.log('before', store.getState());
	const delay = action.meta;
	if (!delay) {
		return next(action);
	}
	const timeout = setTimeout(() => {
		next(action);
	}, delay);
	return () => {
		clearTimeout(timeout);
	}
};



const combineReducer = combineReducers({messageReducer, chatReducer, tokenReducer})

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const InitialStore = createStore(persistedReducer, applyMiddleware(logger));
export const persist = persistStore(InitialStore);