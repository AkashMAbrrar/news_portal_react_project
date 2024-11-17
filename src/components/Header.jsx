import React from "react";
import topLogo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  console.log(import.meta.env.VITE_a);

  return (
    <div className="flex flex-col justify-center items-center py-10 gap-2">
      <div className="logo">
        <img className="w-[470px]" src={topLogo} alt="" />
      </div>
      <p className="text-slate-500 text-xl">Journalism Without Fear Or Favor</p>
      <p className="font-bold">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ssa")}
      </p>
    </div>
  );
};

export default Header;
