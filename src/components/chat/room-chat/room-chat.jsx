import {useEffect, useRef, useState} from "react";
import Message from "./message";
import Modal from "../../common/modal";
import ChatSubmitForm from "./chat-form";
import Profile from "../../common/profile";
import {useSelector} from "react-redux";
import AppLoading from "../../common/app-loading";
import MessageNotification from "./message-notification";

const image = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const msgList = [
  {id: "1", isMe: false, message: "We've got some killer ideas kicking about already.", time: "09:46 AM"},
  {id: "2", isMe: true, message: "Can't wait! How are we coming along with the client?", time: "11:32 AM"},
  {
    id: "3",
    isMe: false,
    message: "Coming along nicely, we've got a draft for the client quarries completed.",
    time: "02:46 PM"
  },
  {id: "4", isMe: true, message: "Roger the boss!", time: "09:46 AM"},
  {id: "5", isMe: false, message: "We've got some killer ideas kicking about already.", time: "09:46 AM"},
  {id: "6", isMe: true, message: "We've got some killer ideas kicking about already.", time: "09:46 AM"},
];

export default function RoomChat({currentRoom}) {
  const msgEndRef = useRef();
  const chat = useSelector(state => state.chat);
  const [msgs, setMsgs] = useState([...msgList]);

  useEffect(() => {
    if (msgEndRef) {
      msgEndRef?.current?.scrollIntoView({behavior: "smooth"});
    }
  }, [msgs]);

  const handleAddMessage = (msgObj) => {
    setMsgs(prev => {
      return [...prev, {...msgObj, isMe: true}];
    });
  };

  return (
    <div className="chat" id="chat1">
      <Modal id="room-chat" component={<Profile/>}/>
      <div className="top">
        <div className="container">
          <div className="col-md-12">
            <div
              className="inside"
              type="button"
              data-toggle="modal"
              data-target="#room-chat"
            >
              <a href="#/">
                <img
                  className="avatar-md"
                  src={image}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Keith"
                  alt="avatar"
                />
              </a>
              <div className="status">
                <i className="material-icons online">fiber_manual_record</i>
              </div>
              <div className="data">
                <h5>
                  <a href="#/">{currentRoom.user.name}</a>
                </h5>
                <span>Active now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {chat.isLoading && <ChatLoading/>}
      {chat.list.length === 0 && <EmptyChat/>}
      <div className="content" id="content">
        <div className="container">
          <div className="col-md-12">
            {chat.list.map(msg => (
              <Message key={msg.id} {...msg} />
            ))}
            <div ref={msgEndRef}/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <ChatSubmitForm onSubmitForm={handleAddMessage}/>
        </div>
      </div>
    </div>
  );
}

function ChatLoading() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="mb-3">
      <AppLoading/>
    </div>
  );
}

function EmptyChat() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <p>Empty Chat</p>
    </div>
  );
}
