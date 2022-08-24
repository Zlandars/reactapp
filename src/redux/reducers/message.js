
const initialState = {
    chatList: {
        1: [{
            chatOwner: 'Evgen',
            chatDescription: 'Games'
            },{
                id: 1,
                author: "Evgen",
                msg: "message evgen",
            }],
        2: [{
            chatOwner: 'OldMan',
            chatDescription: 'Magazine'
            },{
                id: 1,
                author: "Voovke",
                msg: "message voovke",
            }],
    },
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChat': {
            return {
                ...state,
                chatList: {
                    ...state.chatList, ...action.payload
                }
            }
        }
        case 'deleteChat': {
            return {
                ...state,
                chatList: {
                    ...action.payload
                }
            }
        }
        case 'editChat': {
            return {
                ...state,
                chatList: {
                    ...action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}