
const initialState = {
    token: null,
}
export const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addToken':
            return {
                ...state,
                token: action.payload,
            }
        default: {
            return state;
        }

    }
}