import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
import CustomButton from "../styledComponents/Button";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={emailId} id={emailId}>
          Email:{" "}
        </label>
        <Field name="email" />

        <label htmlFor={passwordId} id={passwordId}>
          Password:{" "}
        </label>
        <Field name="password" type="password" />

        <CustomButton type="submit">login</CustomButton>
      </Form>
    </Formik>
  );
};

export default LoginForm;
