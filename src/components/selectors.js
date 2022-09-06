export const addChatList = state => state.chatReducer.chatList;
export const addMessageList = state => state.messageReducer.messageList;
export const activeUser = state => state.tokenReducer.activeUser;
export const isLoading = state => state.tokenReducer.loading;
export const getUsersList = state => state.tokenReducer.userList;
export const isError = state => state.tokenReducer.error;
