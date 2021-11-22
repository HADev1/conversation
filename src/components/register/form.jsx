import { Field } from "formik";
import { Link } from "react-router-dom";
import { AppForm, FieldError } from "../common/app-form";
import { routeNames } from "../../routes/route-name";

export default function RegisterForm({
  initValues,
  clientTypes,
  validationRules,
  onSubmit,
}) {
  return (
    <AppForm
      className="signup"
      initialValues={initValues}
      validationSchema={validationRules}
      handleSubmit={onSubmit}
    >
      <div className="form-parent">
        <div className="form-group">
          <Field
            type="text"
            name="name"
            className="form-control"
            placeholder="Username"
            autoFocus={false}
          />
          <FieldError field="name" />
          <button className="btn icon">
            <i className="material-icons">person_outline</i>
          </button>
        </div>
        <div className="form-group">
          <Field
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
          <button className="btn icon">
            <i className="material-icons">mail_outline</i>
          </button>
          <FieldError field="email" />
        </div>
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
      <div className="greate_what_job_checkbox select_category">
        <label>
          <Field
            type="radio"
            name="clientType"
            value={clientTypes.subscriber}
          />
          <span>Subscriber</span>
        </label>
        <label>
          <Field type="radio" name="clientType" value={clientTypes.provider} />
          <span>Provider</span>
        </label>
      </div>
      <FieldError field="clientType" />
      <button type="submit" className="btn button">
        Sign Up
      </button>

      <div className="callout">
        <span>
          Already a member? <Link to={routeNames.login}>Sign In</Link>
        </span>
      </div>
    </AppForm>
  );
}
