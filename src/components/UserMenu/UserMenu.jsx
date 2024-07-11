import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h3>hello, u r in</h3>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
export default UserMenu;
