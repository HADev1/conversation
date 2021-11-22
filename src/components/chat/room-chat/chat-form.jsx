import moment from "moment";
import {useState} from "react";
import userStorage from "../../../store/local/user";

export default function ChatSubmitForm({onSubmitForm}) {
  const [msg, setMsg] = useState("");

  const handleFormSubmit = () => {
    const msgObj = {
      id: "some id",
      message: msg,
      username: userStorage.getItem("name"),
      time: moment(new Date(),).calendar(),
      file: null
    };
    onSubmitForm(msgObj);
    setMsg("");
  };

  return (
    <div className="bottom">
      <form className="position-relative w-100">
        <textarea
          className="form-control"
          placeholder="Start typing for reply..."
          rows="1"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn emoticons">
          <i className="material-icons">insert_emoticon</i>
        </button>
        <button type="button" className="btn send" onClick={handleFormSubmit}>
          <i className="material-icons">send</i>
        </button>
      </form>
      <label>
        <input type="file"/>
        <span className="btn attach d-sm-block d-none">
          <i className="material-icons">attach_file</i>
        </span>
      </label>
    </div>
  );
}