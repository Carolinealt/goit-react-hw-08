import LoginForm from "../../components/LoginForm/LoginForm";
import css from './LoginPage.module.css'
const LoginPage = () => {

  return (
    <div>
      <h2 className={css.header}>Login Page</h2>

      <LoginForm />
    </div>
  );
};
export default LoginPage;
