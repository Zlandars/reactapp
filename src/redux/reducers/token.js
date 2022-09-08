import * as types from "../ActionType";

const initialState = {
    activeUser: {
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
    },
    userList: [],
}
export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS: {
            return {
                ...state,
                userList: action.payload,
            }
        }
        case types.ADD_USER:
            return {
                ...state,
                activeUser: action.payload
            }
        default: {
            return state;
        }

    }
};

export const  getUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/');
            const data = await response.json();
            dispatch({type: types.GET_USERS, payload: data})
        } catch (e) {
            dispatch({type: types.LOGOUT_ERROR, payload: e.toString()})
        }
    }
};