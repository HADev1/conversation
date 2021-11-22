export default function SingleRoom({
                                     room,
                                     notificationCount,
                                     isActive = false,
                                     isOnline,
                                     onRoomChanged
                                   }) {

  return (
    <p
      // href="#list-chat"
      className={`filterDiscussions all unread single ${
        isActive ? "active" : ""
      }`}
      style={{cursor: "pointer"}}
      // id="list-chat-list"
      // data-toggle="list"
      // role="tab"
      onClick={() => onRoomChanged(room)}
    >
      <img
        className="avatar-md"
        src={room.user?.avatar ?? img}
        data-toggle="tooltip"
        data-placement="top"
        title="Janette"
        alt="avatar"
      />
      <div className="status">
        <i className={`material-icons ${isOnline ? "online" : ""}`}>
          fiber_manual_record
        </i>
      </div>

      {notificationCount && notificationCount > 0 && (
        <div className="new bg-pink">
          <span>+7</span>
        </div>
      )}
      <div className="data">
        <h5>{room.user?.name ?? "Janette Dalton"}</h5>
        {/* <span>Mon</span> */}
        {/* <p>A new feature has been updated to your account. Check it out...</p> */}
      </div>
    </p>
  );
}

const img = "https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80";