import {ADD_USER, GET_USERS, IS_ERROR, IS_LOADING} from "../ActionType";

const initialState = {
    activeUser: {
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
    },
    userList: [],
    load: false,
    error: null,
}
export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            console.log(state)
            return {
                ...state,
                userList: action.payload,
                load: false,
                error: null
            }
        }
        case IS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case IS_LOADING:
            console.log('Call isLoading')
            return {
                ...state,
                load: true
            }
        case ADD_USER:
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
        // страница бесконечно грузит данные. Не понимаю из-за чего и не выходит из загрузки...
        // dispatch({type: IS_LOADING})
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/');
            const data = await response.json();
            dispatch({type: GET_USERS, payload: data})
        } catch (e) {
            dispatch({type: IS_ERROR, payload: e.toString()})
        }
    }
};