import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Context/userContext";
import fire from "../../images/fire.gif";
import guy from "../../images/guy.png";
import stump from "../../images/stump.png";
import { Reveal2, Reveal3, Reveal5 } from "../utils/Reveal";

const BannerIntro = () => {
  const { setIsLoading, isLoading } = useContext(userContext);

  // const isLoadingHandler = () => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 4000);
  // };

  // useEffect(() => {
  //   isLoadingHandler();

  //   console.log(isLoading);
  // }, [isLoading]);

  return (
    <>
      <div
        id="home"
        className={`bg-intro-Image bg-cover h-screen md:pt-0 ease-linear duration-200`}
      >
        <div
          className={`grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 absolute w-screen h-full animate-introduction md:-mt-0 min-h-lg ${
            !isLoading && "hidden"
          }`}
        >
          <div className="flex-1 self-center justify-center text-center md:text-left m-auto ">
            <h1 className=" text-xl md:text-xl opacity-0 animate-introduction font-mono">
              Loading...
            </h1>
          </div>
          <div className=" flex self-end justify-center mb-20 md:mb-20 min-w-20">
            {/* <div className="flex items-end">
              <img
                src={fire}
                alt=""
                className={`h-40 ${!isLoading && "opacity-0"}`}
              />
              <img
                src={guy}
                alt=""
                className={`h-60 ${!isLoading ? "opacity-0" : "opacity-50"}`}
              />
            </div> */}
          </div>
        </div>

        <div className=" pt-36 md:pt-0 grid md:grid-cols-2 w-screen h-5/6 md:h-full min-h-lg text-white">
          <div className="flex-1 self-center justify-center text-center md:text-left m-auto ">
            <Reveal2>
              <h1 className=" text-5xl md:text-6xl animate-introduction2">
                Hi, I'm Hanson
              </h1>
            </Reveal2>
            <Reveal3>
              <h1 className=" text-md px-7 md:px-0 md:text-md pt-3 pb-6 max-w-sm animate-introduction2">
                A passionate developer dedicated to enriching experiences,
                mostly with react.
              </h1>
            </Reveal3>
            <Reveal5>
              <div className="m-auto md:m-0 grid md:grid-cols-2 gap-4 max-w-xs animate-introduction2">
                <a
                  href="#skills"
                  className="p-3 px-8 rounded-xl border border-purple-600 bg-purple-600 hover:bg-purple-500 ease-in duration-100 text-center"
                >
                  <button className="font-mono ">PORTFOLIO</button>
                </a>
                <a
                  href="#about"
                  className="p-3 px-8 rounded-xl border  hover:bg-slate-700 ease-in duration-100"
                >
                  <button type="button" className=" font-mono">
                    ABOUT ME
                  </button>
                </a>
              </div>
            </Reveal5>
          </div>
          <div className=" flex self-end justify-center mb-10 md:mb-20 min-w-20 mt-5 md:mt-0 z-10">
            <div className="flex items-end ">
              <img src={fire} alt="" className="h-40 animate-fire" />
              <div>
                <img src={guy} alt="" className=" h-60 absolute animate-guy" />
                <img src={stump} alt="" className=" h-60 animate-stump  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerIntro;
