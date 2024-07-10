import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(login(userData));
  };
  return <LoginForm submit={handleSubmit} />;
};
export default LoginPage;
