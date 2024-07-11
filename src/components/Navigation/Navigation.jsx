import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/contacts"}>Contacts</Link>
    </div>
  );
};

export default Navigation;
