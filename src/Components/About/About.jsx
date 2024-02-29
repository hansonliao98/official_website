import React, { useContext } from "react";
import selfie3 from "../../images/selfie3.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import email from "../../images/email.png";
import {
  Reveal,
  Reveal2,
  Reveal3,
  Reveal4,
  Reveal5,
  RevealPic,
} from "../utils/Reveal";
import { userContext } from "../../Context/userContext";

const About = () => {
  const { isDesktop } = useContext(userContext);

  return (
    <div
      className=" grid md:grid-cols-2 mx-10 md:mx-20 py-20 md:pb-0"
      id="about"
    >
      <div className=" flex md:grid-cols-1 justify-end items-start gap-3 self-start md:px-10 ">
        {/* <RevealPic>
          <img
            src={selfie}
            alt=""
            className=" h-4/6 max-h-80 md:max-h-full border rounded-2xl max-w-full bg-blue-200/30 backdrop-blur-lg"
          />
        </RevealPic> */}
        <RevealPic>
          <img
            src={selfie3}
            alt=""
            className="w-4/6 h-auto md:w-full border border-slate-500 bg-slate-200/60 backdrop-blur-lg rounded-full"
            // style={{ maxWidth: "400px" }}
          />
        </RevealPic>
      </div>
      <div className="md:m-auto mt-10 flex flex-col self-center ">
        <Reveal>
          <h1 className="text-3xl pb-5">ABOUT ME</h1>
        </Reveal>
        <Reveal2>
          <h1 className="text-md ">
            I'm a front end developer with an eye for elegant design. My passion
            lies in creativity in a technical capacity, that is, working with a
            team to create memorable experiences. I bring people's ideas to
            life, because i'm a problem solver at my core.
            <br />
            <br /> In my downtime, you'll find me woodworking, folding origami,
            or interior designing.
          </h1>
        </Reveal2>
        <div className="flex gap-2 mt-5">
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
                id="skills"
                src={email}
                alt=""
                className="absolute w-10 linear  hover:animate-ping"
              />
              <img src={email} alt="" className="w-10 " />
            </Reveal5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
