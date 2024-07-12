import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";
import css from './LoginPage.module.css'
const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(login(userData));
  };
  return (
    <div>
      <h2 className={css.header}>Login Page</h2>

      <LoginForm submit={handleSubmit} />
    </div>
  );
};
export default LoginPage;
