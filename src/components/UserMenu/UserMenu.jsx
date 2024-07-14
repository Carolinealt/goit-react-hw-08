import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
const UserMenu = () => {
  const {name} = useSelector(selectUser)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.container}>
      <h3>hello, {name}, u r in</h3>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
export default UserMenu;
