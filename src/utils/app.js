// const BASE_URL =
//   process.env.NODE_ENV !== "production"
//     ? "https://e2e-chat-backend.herokuapp.com"
//     : "http://localhost:8000";

export const BASE_URL = "http://localhost:8000";

export const SERVER_ROUTES = {
  room: {
    getAllUserRooms: "/user/rooms"
  },
  provider: {
    getAllProvidersForUser: "/provider/all-for-user"
  }
};

export const REDUX_STORE = {
  provider: {
    isEnableCache: false,
  },
  room: {
    isEnableCache: false
  }
};

export const TABS = {
  chat: "all-chats",
  provider: "providers"
};

export const SOCKET = {
  listeners: {},
  emitters: {
    createRoom: "create-room",
    joinRoom: "join-room"
  }
};