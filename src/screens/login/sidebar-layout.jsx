import { Link } from "react-router-dom";
import { routeNames } from "../../routes/route-name";

export default function SidebarLayout() {
  return (
    <div className="aside order-md-2">
      <div className="container">
        <div className="col-md-12">
          <div className="preference">
            <h2>Welcome Back</h2>
            <p>
              Enter your personal details and start your journey with our Chat
              App today.
            </p>
            <Link to={routeNames.register} className="btn button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
