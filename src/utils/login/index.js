import * as yup from "yup";

const validationRules = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(8).required().label("Password"),
});

const initValues = {
  email: "",
  password: "",
};

export { validationRules, initValues };
