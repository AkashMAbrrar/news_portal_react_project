import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login ">
        <div className="flex gap-2">
          <img src={userIcon} alt="" />
          <button className=" btn btn-neutral rounded-none text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
