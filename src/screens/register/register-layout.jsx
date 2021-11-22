import { useHistory } from "react-router-dom";
import useApi from "../../hooks/use-api";
import * as authApi from "../../apis/auth";
import * as registerUtils from "../../utils/register";
import { RegisterForm } from "../../components/register";
import ServerError from "../../components/common/server-error";
import { routeNames } from "../../routes/route-name";

export default function RegisterLayout() {
  const history = useHistory();
  const auth = useApi(authApi.register, { hasCatchError: true });

  const handleSubmit = async (formValues) => {
    const validatedFields = getValidatedFields(formValues);

    try {
      await auth.request(validatedFields);
      history.replace(routeNames.login);
    } catch (err) {}
  };

  const getValidatedFields = (formValues) => {
    const isProvider =
      formValues.clientType === registerUtils.clientTypes.provider;
    const registerFields = { ...formValues, isProvider };
    return registerFields;
  };

  return (
    <div className="main order-md-2">
      <div className="start">
        <div className="container">
          <div className="col-md-12">
            <div className="content">
              <h1>Create Account</h1>
              <ServerError error={auth.error} />
              <RegisterForm
                initValues={registerUtils.initValues}
                clientTypes={registerUtils.clientTypes}
                validationRules={registerUtils.validationRules}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
