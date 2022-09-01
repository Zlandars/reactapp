
const initialState = {
    chatList: [
            {
                chat_id: 1,
                chatOwner: 'Evgen',
                chatDescription: 'Games'
            },
            {
                chat_id: 2,
                chatOwner: 'OldMan',
                chatDescription: 'Magazine'
            },
]};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChat': {
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    [action.payload.chat_id]: {
                        ...action.payload.obj
                    }
                }
            }
        }
        case 'deleteChat': {
            return {
                ...state,
                chatList: {
                    ...state.chatList.filter((item) => {
                        return item.chat_id !== action.payload.chat_id;
                    })
                }
            }
        }
        default: {
            return state;
        }
    }
}