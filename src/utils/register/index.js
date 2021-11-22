import * as yup from "yup";

const validationRules = yup.object().shape({
  name: yup.string().min(5).required().label("Username"),
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(8).required().label("Password"),
  clientType: yup
    .string()
    .oneOf(["provider", "subscriber"])
    .required()
    .label("Client Type"),
});

const initValues = {
  name: "",
  email: "",
  password: "",
  clientType: "subscriber",
};

const clientTypes = {
  provider: "provider",
  subscriber: "subscriber",
};

export { validationRules, initValues, clientTypes };
