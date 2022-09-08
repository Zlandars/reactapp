import * as types from './ActionType';
import { auth } from "../services/firebase";

const registerStart = () => (
	{
		type: types.SIGNUP_START,
	}
)

const registerSuccess = (user) => (
	{
		type: types.SIGNUP_SUCCESS,
		payload: user,
	}
)
const registerError = (error) => (
	{
		type: types.SIGNUP_ERROR,
		payload: error,
	}
)

const  signInStart = () => (
	{
		type: types.SIGNIN_START
	}
)
const  signInSuccess = (user) => (
	{
		type: types.SIGNIN_SUCCESS,
		payload: user
	}
)
const signInError = (error) => (
	{
		type: types.SIGNIN_ERROR,
		payload: error,
	}
)
const logOutStart = () => (
	{
		type: types.LOGOUT_START,
	}
)
const logOutSuccess = () => (
	{
		type: types.LOGOUT_SUCCESS,
		currentUser: null
	}
)
const logOutError = (error) => (
	{
		type: types.LOGOUT_ERROR,
		payload: error
	}
)

export const registerInitiate = (email, password,displayName) => {
	return dispatch => {
			dispatch(registerStart());
			auth.createUserWithEmailAndPassword(email, password).then(({user})=>{
				user.updateProfile({
					displayName
				});
				dispatch(registerSuccess(user));
			}).catch((error)=> dispatch(registerError(error))
	)
	}
}

export const loginInitiate = (email, password) => {
	return dispatch => {
		dispatch(signInStart())
		auth
			.signInWithEmailAndPassword(email,password)
			.then(({user})=>dispatch(signInSuccess(user)))
			.catch(e=>dispatch(signInError(e)))
	}
}

export const logOut = () => {
	return dispatch => {
		dispatch(logOutStart());
		auth
			.signOut().then(()=> dispatch(logOutSuccess()))
			.catch(e=>dispatch(logOutError(e)))

	}
}