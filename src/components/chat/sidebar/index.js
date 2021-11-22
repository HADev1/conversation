import "./style.css";
import userStorage from "../../../store/local/user";
import {routeNames} from "../../../routes/route-name";

export default function Sidebar() {
  const handleLogout = () => {
    userStorage.clearUser();
    window.location.replace(routeNames.login);
  };

  return (
    <div className="navigation">
      <div className="container">
        <div className="inside">
          <div className="nav nav-tab menu">
            <a href="#members" data-toggle="tab" className="show_profile_data">
              <i
                type="button"
                data-toggle="modal"
                data-target="#show_profile_data"
                className="material-icons profile_data"
              >
                account_circle
              </i>
            </a>
            <a href="#notifications" data-toggle="tab" className="f-grow1">
              <i className="material-icons">notifications_none</i>
            </a>
            <button className="btn power" onClick={handleLogout}>
              <i className="material-icons">power_settings_new</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
