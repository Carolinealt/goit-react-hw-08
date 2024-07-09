import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { register } from "../../redux/auth/operations";
const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(register(userData));
  };
  return (
    <div>
      <h2>Registration Page</h2>
      <RegistrationForm submit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
