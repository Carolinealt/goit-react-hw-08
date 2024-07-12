import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Link to={"/"}>Home</Link>
      {isLogedIn && <Link to={"/contacts"}>Contacts</Link>}
    </div>
  );
};

export default Navigation;
