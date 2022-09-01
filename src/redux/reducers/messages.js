const initialState = {
    messageList: [
        {
            id: 1,
            chat_id: 1,
            author: "Evgen",
            msg: "message evgen",
        }, {
            id: 2,
            chat_id: 2,
            author: "Voovke",
            msg: "message voovke",
        }, {
            id:3,
            chat_id: 1,
            author: 'Ti',
            msg: 'Hello World'
        }
    ]
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage': {
            return {
                ...state,
                messageList: [
                    ...state.chatList,
                    {
                        ...state.chatList[action.payload.messageList.id],
                        ...action.payload.messageList.obj
                    }
                ]
            }
        }
        case 'deleteMessage': {
            // const obj = state.chatList[action.payload.chat_id].filter((item)=>{
            //     if (item.id !== action.payload.id_msg) return item
            // })
            console.log('Не придумал пока, но решил не делать как проще...)')
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    ...action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}