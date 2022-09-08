import * as types from '../ActionType';
const initialState = {
	loading: false,
	error:null,
	currentUser: null,
}
const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGOUT_START:
		case types.SIGNIN_START:
		case types.SIGNUP_START:
			return {
				...state,
				loading: true,
			}
		case types.LOGOUT_SUCCESS:
		case types.SIGNIN_SUCCESS:
		case types.SIGNUP_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				loading: false,
			}
		case types.LOGOUT_ERROR:
		case types.SIGNIN_ERROR:
		case types.SIGNUP_ERROR:
			return {
				...state,
				error: action.payload,
			}
		default:
			return state;
	}
};

export default Reducer;