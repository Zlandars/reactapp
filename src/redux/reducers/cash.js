
const initialState = {
    cash: 0,
}
export const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addPayment':
            return {
                ...state,
                cash: state.cash + action.payload,
            }
        case 'returnPayment':
            return {
                ...state,
                cash: state.cash - action.payload,
            }
        default: {
            return state;
        }

    }
}