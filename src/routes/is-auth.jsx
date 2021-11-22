import { Redirect, Route } from "react-router-dom";
import userStorage from "../store/local/user";
import { routeNames } from "./route-name";

export default function ProtectedRoute({
  isAuth = false,
  component: Component,
  ...rest
}) {
  const user = userStorage.getUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth && !user) {
          return <RedirectToLogin {...props} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

function RedirectToLogin({ ...props }) {
  return (
    <Redirect
      to={{ pathname: routeNames.login, state: { from: props.location } }}
    />
  );
}
