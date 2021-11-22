import { Field } from "formik";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes/route-name";
import { AppForm, FieldError } from "../common/app-form";

export default function LoginForm({ initValues, onSubmit, validationRules }) {
  return (
    <AppForm
      initialValues={initValues}
      validationSchema={validationRules}
      handleSubmit={onSubmit}
    >
      <div className="form-group">
        <Field
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
        />
        <button className="btn icon">
          <i className="material-icons">mail_outline</i>
        </button>
        <FieldError field="email" />
      </div>
      <div className="form-group">
        <Field
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
        <button className="btn icon">
          <i className="material-icons">lock_outline</i>
        </button>
        <FieldError field="password" />
      </div>

      <button type="submit" className="btn button">
        Chext In
      </button>
      <div className="callout">
        <span>
          Don't have account?{" "}
          <Link to={routeNames.register}>Create Account</Link>
        </span>
      </div>
    </AppForm>
  );
}
