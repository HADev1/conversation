import React from "react";
import {useSelector} from "react-redux";
import "./style.css";
import Modal from "../../components/common/modal";
import Sidebar from "../../components/chat/sidebar";
import Profile from "../../components/common/profile";
import {RoomChat} from "../../components/chat/room-chat";
import {ConversationChannel} from "../../components/chat";
import ChatNotSelected from "../../components/chat/room-chat/chat-not-selected";

export default function ChatScreen() {
  const currentRoomSelected = useSelector(state => state.room.currentRoom);

  return (
    <>
      <main>
        <div className="layout">
          <Sidebar/>
          <div className="sidebar home_sidebar" id="sidebar">
            <div className="container">
              <div className="col-md-12">
                <div className="tab-content">
                  <ConversationChannel/>
                </div>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="babble tab-pane fade active show"
                id="list-chat"
                role="tabpanel"
                aria-labelledby="list-chat-list"
              >
                {currentRoomSelected ? <RoomChat currentRoom={currentRoomSelected}/> : <ChatNotSelected/>}
              </div>
            </div>
          </div>
        </div>
        <Modal title="Jazim Abbas" component={<Profile isEditMode/>}/>
      </main>
    </>
  );
}
