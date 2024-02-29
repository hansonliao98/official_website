import React from "react";
import fire from "../../images/fire.gif";
import guy from "../../images/guy.png";

const Loading = () => {
  return (
    <div className="h-screen bg-black grid md:grid-cols-2 z-12">
      <div>Hellp</div>
      <div className=" flex self-end justify-center mb-10 md:mb-20 min-w-20 mt-5 md:mt-0">
        <div className="flex items-end ">
          <img src={fire} alt="" className="h-40  " />
          <img src={guy} alt="" className=" h-60 " />
        </div>
      </div>
    </div>
  );
};

export default Loading;
