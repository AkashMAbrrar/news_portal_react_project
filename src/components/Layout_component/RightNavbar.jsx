import React from "react";
import ScocialLogin from "../SocialLogin";
import FindUs from "../FindUs";
import Qzone from "../Qzone";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <ScocialLogin></ScocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNavbar;
