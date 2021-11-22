import {createSlice} from "@reduxjs/toolkit";
import {SOCKET} from "../../utils/app";

const initialState = {
  list: [],
  isLoading: false
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    chatRequested: (chats, actions) => {
      chats.isLoading = true;
    },
    chatsReceived: (chats, actions) => {
      chats.list = actions.payload;
      chats.isLoading = false;
    }
  }
});

const {chatRequested, chatsReceived} = chatSlice.actions;
export default chatSlice.reducer;

// ACTIONS
export const loadChatMessages = (socket, roomId) => (dispatch, getState) => {
  dispatch(chatRequested());

  socket.emit(SOCKET.emitters.joinRoom, {roomId}, ({msgHistory}) => {
    console.log("after join room: ", msgHistory);
    dispatch(chatsReceived(msgHistory));
  });
};