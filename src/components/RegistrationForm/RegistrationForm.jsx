import { Field, Form, Formik } from "formik";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import CustomButton from "../styledComponents/Button";
const RegistrationForm = ({ submit }) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameId} id={nameId}>
          Name:{" "}
        </label>
        <Field name="name" />
        <label htmlFor={emailId} id={emailId}>
          Email:{" "}
        </label>

        <Field name="email" />
        <label htmlFor={passwordId} id={passwordId}>
          Password:{" "}
        </label>

        <Field name="password" type="password" />
        <CustomButton variant="contained" type="submit">
          Register
        </CustomButton>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
