
const initialState = {
    name: null,
    username: null,
    email: null,
}
export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addToken':
            return {
                ...state,
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email,
            }
        default: {
            return state;
        }

    }
}