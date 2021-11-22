import {configureStore} from "@reduxjs/toolkit";
import tabReducer from "./tab";
import roomReducer from "./room";
import chatReducer from "./chat";
import searchReducer from "./search";
import providerReducer from "./provider";
import apiMiddleware from "./middlewares/api";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    tab: tabReducer,
    search: searchReducer,
    provider: providerReducer,
    chat: chatReducer
  },
  middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(apiMiddleware))
});