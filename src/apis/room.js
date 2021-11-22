import api from "./index";

export function getRooms(userId) {
  return api.get("/user/rooms");
}