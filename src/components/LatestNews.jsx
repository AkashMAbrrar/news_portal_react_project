import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-base-100 px-3 py-2  font-bold bg-[#D72050]">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="bg-base-200 p-2">
        <Link to="/news">
          Donald Trump Is One Of The Biggest Fraud In The World Tt This Time. He
          Deserves An Award For Proved Himself A Mad Man.
        </Link>
        <Link className="ml-2 " to="/news">
          There Is No Existence such country named Israel. Israel Is A Terrorist
          Bustard Of British And America.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
