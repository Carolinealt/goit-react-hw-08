import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./LoginForm.module.css";
const LoginForm = ({ submit }) => {
  const emailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{  email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={emailId} id={emailId}>
          Email:{" "}
        </label>

        <Field name="email" />
        <label htmlFor={passwordId} id={passwordId}>
          Password:{" "}
        </label>

        <Field name="password" type="password" />
        <button type="submit">register</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
