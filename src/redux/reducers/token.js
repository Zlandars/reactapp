import * as types from "../ActionType";
import {db} from "../../services/firebase";

const initialState = {
    activeUser: {
        email: "",
        id: null,
        name: "",
        username: "",
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
        case types.ACTIVE_USER:
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
    return dispatch => {
        db.child('profile').on('value', (snap)=>{
            if(snap.val() !== null) {
                dispatch({type: types.GET_USERS, payload: {...snap.val()}})
            } else {
                dispatch({type: types.GET_USERS, payload: {}})
            }
        })
    }
    // return async dispatch => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    //         const data = await response.json();
    //         dispatch({type: types.GET_USERS, payload: data})
    //     } catch (e) {
    //         dispatch({type: types.LOGOUT_ERROR, payload: e.toString()})
    //     }
    // }
}

export const addUser = (state) => {
    return dispatch => {
        db.child('profile').push(state, (e => {
           e && console.log(e)
        }))
    }
}
export const deleteUser = (id) => {
    return dispatch => {
        db.child(`profile/${id}`).remove(e => {
            if (e) return console.log(e)
        });
    }
}
export const updateUser =  (user) => {
    return dispatch => {
        console.log(user)
        db.child(`profile/${user.id}`).update(user, e => {if(e) return console.log(e)})
    }
}