import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { register } from "../../redux/auth/operations";
import css from './RegistrationPage.module.css'
const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(register(userData));
  };
  return (
    <div>
      <h2 className={css.header}>Registration Page</h2>
      <RegistrationForm submit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
