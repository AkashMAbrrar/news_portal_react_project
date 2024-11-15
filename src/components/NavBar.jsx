import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.name}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login ">
        <div className="flex gap-2">
          <img src={userIcon} alt="" />
          <Link
            to="/auth/login"
            className=" btn btn-neutral rounded-none text-white">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
