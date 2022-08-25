
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
        case 'addMessage': {
            return {
                ...state,
                chatList: {
                    ...state.chatList,
                    [action.payload.id]: [
                        ...state.chatList[action.payload.id],
                        ...action.payload.obj

                    ]
                }
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