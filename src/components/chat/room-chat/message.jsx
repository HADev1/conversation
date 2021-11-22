const image = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

export default function Message({
                                  isMe = false,
                                  isFile = false,
                                  isTyping = false,
                                  message,
                                  time,
                                }) {
  const prefixClassName = (className) => {
    return `${className} ${isMe ? "me" : ""}`;
  };

  return (
    <div className={prefixClassName("message")}>
      {!isMe && (
        <img
          className="avatar-md"
          src={image}
          data-toggle="tooltip"
          data-placement="top"
          title="Keith"
          alt="avatar"
        />
      )}
      {!isTyping && (
        <div className="text-main">
          <div className={prefixClassName("text-group")}>
            <div className={prefixClassName("text")}>
              {!isFile && <p>{message}</p>}
              {isFile && <File/>}
            </div>
          </div>
          {time && <span>{time}</span>}
        </div>
      )}
      {isTyping && (
        <div className="text-main">
          <div className="text-group">
            <div className="text typing">
              <div className="wave">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function File() {
  return (
    <div className="attachment">
      <button className="btn attach">
        <i className="material-icons md-18">insert_drive_file</i>
      </button>
      <div className="file">
        <h5>
          <a href="/">Tenacy Agreement.pdf</a>
        </h5>
        <span>24kb Document</span>
      </div>
    </div>
  );
}