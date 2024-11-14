import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const ScocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3 ">Login With Social Media</h2>
      <div className="*:w-full space-y-2">
        <button className="btn">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn">
          <FaGithub /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default ScocialLogin;
