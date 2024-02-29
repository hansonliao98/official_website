import React from "react";
import lantern from "../../images/lantern.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import email from "../../images/email.png";
import light from "../../images/light.png";
import { Reveal, Reveal3, Reveal4, Reveal5 } from "../utils/Reveal";

const Footer = () => {
  return (
    <div
      id="footer"
      className="md:h-screen bg-footer grid md:grid-cols-2 md:items-center justify-center -mt-1 -mb-1"
    >
      <div className="flex justify-center md:justify-end items-end md:p-4 ">
        <img
          src={lantern}
          alt=""
          className="  -z-1 w-40 md:w-60 mt-20 md:mt-0 animate-flicker "
        />
        <img
          src={light}
          alt=""
          className="absolute z-1 w-40 md:w-60 md:mt-0 float-right"
        />
      </div>
      <div className=" mb-20 md:mb-0 p-4 ">
        <div className="flex pt-4 gap-2 pb-3 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/hanson-liao-2031/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reveal3>
              <img
                src={linkedin}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={linkedin} alt="" className="w-10 " />
            </Reveal3>
          </a>
          <a
            href="https://github.com/hansonliao98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reveal4>
              <img
                src={github}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={github} alt="" className="w-10 " />
            </Reveal4>
          </a>
          <a
            href="mailto: hansonliao982@gmail.com?subject = Feedback&body = Message"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Reveal5>
              <img
                src={email}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={email} alt="" className="w-10 " />
            </Reveal5>
          </a>
        </div>
        <Reveal>
          <h1 className="text-sm text-center md:text-start">
            Built &amp; Designed by Hanson Liao
          </h1>
          <h1 className="text-sm text-center md:text-start">
            Updated July 2023
          </h1>
        </Reveal>
      </div>
    </div>
  );
};

export default Footer;
