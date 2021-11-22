import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import EmptyRoom from "./empty-room";
import socket from "../../../socket";
import SingleRoom from "./single-room";
import AppLoading from "../../common/app-loading";
import {changedCurrentRoom, getFilteredRooms, loadRooms} from "../../../store/room";

export default function RoomList() {
  const dispatch = useDispatch();
  const rooms = useSelector(getFilteredRooms);
  const isLoading = useSelector(state => state.room.isLoading);

  useEffect(() => {
    dispatch(loadRooms());
    //  eslint-disable-next-line
  }, []);

  const handleRoomChange = (room) => {
    dispatch(changedCurrentRoom(socket, room));
  };

  return (
    <>
      {isLoading && <AppLoading isSmall/>}
      {rooms.length === 0 && <EmptyRoom/>}
      {!isLoading && rooms.map(room => (
        <SingleRoom
          key={room.id}
          room={room}
          isOnline={room.isOnline}
          onRoomChanged={handleRoomChange}/>
      ))}
    </>
  );
}