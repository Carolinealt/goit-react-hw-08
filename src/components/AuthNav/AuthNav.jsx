import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <Link to={"/login"}>login</Link>
      <Link to={"/register"}>register</Link>
    </div>
  );
};
export default AuthNav; 
