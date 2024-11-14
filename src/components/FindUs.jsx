import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold my-4">Find Us On</h2>
      <div className="join flex gap-2 join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-blue-500"></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-sky-500"></FaTwitter> Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="text-orange-500"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
