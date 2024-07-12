import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const HomePage = () => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  return (
    <>
      {isLogedIn ? (
        <p>Welocome, {name}</p>
      ) : (
        <h3>Please, check your autorization</h3>
      )}
    </>
  );
};
export default HomePage;
