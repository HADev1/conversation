import {BrowserRouter as Router, Switch} from "react-router-dom";

import ProtectedRoute from "./is-auth";
import ChatScreen from "../screens/chat";
import {routeNames} from "./route-name";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";

export default function AppRoutes() {
    return (
        <>
            <Router>
                <Switch>
                    <ProtectedRoute
                        exact
                        path={routeNames.home}
                        isAuth={true}
                        component={ChatScreen}
                    />
                    <ProtectedRoute
                        path={routeNames.register}
                        component={RegisterScreen}
                    />
                    <ProtectedRoute path={routeNames.login} component={LoginScreen}/>
                </Switch>
            </Router>
        </>
    );
}
