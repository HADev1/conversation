/** @format */

import "./login.css";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/use-api";
import * as authApi from "../../apis/auth";
import * as loginUtils from "../../utils/login";
import userStorage from "../../store/local/user";
import { LoginForm } from "../../components/login";
import { routeNames } from "../../routes/route-name";
import ServerError from "../../components/common/server-error";

export default function LoginFormLayout() {
  const history = useHistory();
  const auth = useApi(authApi.login, { hasCatchError: true });

  const handleSubmit = async (formValues) => {
    try {
      const res = await auth.request(formValues);
      const user = res.data.user;
      userStorage.setUser(user);
      history.replace(routeNames.chat);
    } catch (_) {}
  };

  return (
    <div className="main order-md-1">
      <div className="start" id="login-layout">
        <div className="container">
          <div className="login-heading-container">
            <h3>
              <span className="heading-primary">Login</span>{" "}
            </h3>
          </div>
          <div className="col-md-12">
            <div className="content">
              <ServerError error={auth.error} />
              <LoginForm
                initValues={loginUtils.initValues}
                validationRules={loginUtils.validationRules}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function LoginIcons() {
//   return (
//     <div className="third-party">
//       <button className="btn item bg-blue">
//         <i className="material-icons">pages</i>
//       </button>
//       <button className="btn item bg-teal">
//         <i className="material-icons">party_mode</i>
//       </button>
//       <button className="btn item bg-purple">
//         <i className="material-icons">whatshot</i>
//       </button>
//     </div>
//   );
// }
