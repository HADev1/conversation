import {createSelector, createSlice} from "@reduxjs/toolkit";
import * as apiActions from "../api";
import {removeProvider} from "../provider";
import {REDUX_STORE, SERVER_ROUTES, SOCKET} from "../../utils/app";
import {loadChatMessages} from "../chat";

const initialState = {
  list: [],
  isLoading: false,
  currentRoom: null
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    roomsRequested: (rooms, actions) => {
      rooms.isLoading = true;
    },
    roomsReceived: (rooms, actions) => {
      rooms.list = actions.payload.rooms;
      rooms.isLoading = false;
    },
    currentRoomChanged: (rooms, actions) => {
      rooms.currentRoom = actions.payload;
    }
  }
});

const {roomsRequested, roomsReceived, currentRoomChanged} = roomSlice.actions;
export default roomSlice.reducer;

// SELECTORS
export const getFilteredRooms = createSelector(
  state => state.search.searchText,
  state => state.room.list,
  (searchMsg, rooms) => {
    return rooms.filter(room => room.user.name.toLowerCase().includes(searchMsg));
  }
);

// ACTIONS
export const loadRooms = () => (dispatch, getState) => {
  const actionDispatch = () => {
    dispatch(
      apiActions.apiCallBegan({
        url: SERVER_ROUTES.room.getAllUserRooms,
        onStart: roomsRequested.type,
        onSuccess: roomsReceived.type
      })
    );
  };

  if (!REDUX_STORE.room.isEnableCache) {
    actionDispatch();
    return;
  }

  const {room} = getState();
  if (!room.list || room.list.length === 0) {
    actionDispatch();
  }
};

export const createRoom = (socket, opponentUserId) => (dispatch, getState) => {
  socket.emit(SOCKET.emitters.createRoom, {userId: opponentUserId}, room => {
    console.log("room from server: ", room);
    dispatch(removeProvider(opponentUserId));
  });
};

export const changedCurrentRoom = (socket, room) => (dispatch, getState) => {
  dispatch(currentRoomChanged(room));
  dispatch(loadChatMessages(socket, room.id));
};