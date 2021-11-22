import {io} from "socket.io-client";
import {BASE_URL} from "../utils/app";
import userStorage from "../store/local/user";

const socket = io(BASE_URL, {auth: {token: userStorage.getItem("token")}});

export default socket;
