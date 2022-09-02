
const initialState = {
    messageList: [{
                id: 1,
                chat_id: 1,
                author: "Evgen",
                msg: "message evgen",
            },{
                id: 2,
                chat_id: 2,
                author: "Voovke",
                msg: "message voovke",
            }]
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage': {
            return {
                ...state,
                messageList: [
                        ...state.messageList,
                        action.payload
                    ]
                }
            }
        case 'deleteMessage': {
            return {
                ...state,
                messageList: [
                    ...state.messageList.filter((item) => {
                        return item.id !== action.payload;
                    })
                ]
            }
        }
        default: {
            return state;
        }
    }
}