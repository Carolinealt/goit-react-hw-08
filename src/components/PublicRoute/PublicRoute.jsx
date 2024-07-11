import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuth } from "../../redux/auth/selectors";

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    <p>...loading</p>;
  }

  if (isLoggedIn && token) {
    return <Navigate to={"/contacts"} />;
  }

  return <Outlet />;
};

export default PublicRoute;
