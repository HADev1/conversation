import { Link } from "react-router-dom";
import { routeNames } from "../../routes/route-name";

export default function SidebarLayout() {
  return (
    <div className="aside order-md-1">
      <div className="container">
        <div className="col-md-12">
          <div className="preference">
            <h2>Welcome Back!</h2>
            <p>
              To keep connected with your friends please login with your
              personal info.
            </p>
            <Link to={routeNames.login} className="btn button">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
