import React from "react";

import swimmingBaby from "../assets/swimming.png";
import PlayGround from "../assets/playground.png";
import bgAdd from "../assets/bg.png";

const Qzone = () => {
  return (
    <div className="bg-slate-200">
      <h2 className="font-semibold mt-5">Q-zone</h2>
      <div>
        <img className="border-2 my-2" src={PlayGround} alt="" />
        <img className="border-2 " src={swimmingBaby} alt="" />
        <div className="bg-slate-50 mt-10 border-2">
          <img className="mt-4" src={bgAdd} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
