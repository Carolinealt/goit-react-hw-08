import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
const AppBar = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
