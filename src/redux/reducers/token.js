
const initialState = {
    activeUser: {
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
    },
    userList: [],
    loading: false,
    error: '',
}
export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getUsers': {
            console.log(action.payload)
            return {
                ...state,
                userList: action.payload,
                loading: false
            }
        }
        case 'isError':
            return {
                ...state,
                error: action.payload
            }
        case 'isLoading':
            console.log('Call isLoading')
            return {
                ...state,
                loading: true
            }
        case 'addUser':
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
        // dispatch({type: 'isLoading'})
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/');
            const data = await response.json();
            dispatch({type: 'getUsers', payload: data})
        } catch (e) {
            dispatch({type: 'isError', payload: e.toString()})
        }
    }
};