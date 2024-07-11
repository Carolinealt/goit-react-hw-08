import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuth } from "../../redux/auth/selectors";

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);
  if (!isLoggedIn && token) {
    <p>...loading</p>;
  }
  if (!isLoggedIn && !token) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
