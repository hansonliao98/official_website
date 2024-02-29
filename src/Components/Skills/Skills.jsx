import { anticipate, MotionConfig } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import moonsmile from "../../media/moonsmile.png";
import arrow from "../../images/arrow.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { style } from "@mui/system";
import Skill from "./Skill";

const skills = [
  "React",
  "jQuery",
  "Tailwind",
  "Bootstrap",
  "MUI",
  "Node",
  "Next",
  "Express",
  "Rest API",
  "Github",
  "Mongo DB",
  "React Dev Tools",
  "Figma",
  "Python",
  "Angular",
];

const stars = [
  {
    ml: 10,
    mt: 0,
    size: 3,
  },
  {
    ml: 72,
    mt: 8,
    size: 1,
  },
  {
    ml: 16,
    mt: 14,
    size: 2,
  },
  {
    ml: 96,
    mt: 24,
    size: 1,
  },
  {
    ml: 80,
    mt: 24,
    size: 1,
  },
  {
    ml: 64,
    mt: 36,
    size: 2,
  },
  {
    ml: 10,
    mt: 48,
    size: 1,
  },
];

const Skills = () => {
  const [moon, setMoon] = useState({ right: 60, top: 10 });
  const [fullMoon, setFullMoon] = useState(false);
  const [numOfClicks, setNumOfClicks] = useState(1);

  const moonHandler = (event) => {
    let newMoon = { ...moon };
    // const beep = moon.right + 1
    // console.log(beep);
    newMoon.right = moon.right + 32;
    newMoon.top = moon.top + 32;
    console.log(newMoon);
    setMoon(newMoon);
    console.log(moon.right);
    setNumOfClicks((prevState) => prevState + 1);
    console.log(numOfClicks);

    if (numOfClicks >= 4) {
      setFullMoon(true);
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="grid md:grid-cols-[1fr_2fr] px-10 md:px-20 mt-20 mb-40 md:my-40">
      <div className="flex justify-center pb-20 md:pb-3">
        <div
          className={`ease-in-out -z-9 transition-all duration-300 absolute -z-9 w-full md:w-96 h-48`}
        >
          {stars.map((star, i) => (
            <motion.div
              key={star.id}
              animate={{
                opacity: 0,
              }}
              transition={{
                duration: 3,
                delay: i * 0.66,
                repeat: Infinity,
              }}
              className={`z-10 absolute ml-${star.ml} mt-${
                star.mt
              } bg-white w-${star.size} h-${star.size} rounded-full ${
                !fullMoon && "hidden"
              }`}
            ></motion.div>
          ))}
        </div>
        <div
          className={`ease-in-out transition-all duration-300 absolute w-40 h-40 bg-moonlight rounded-full 
          mt-[${moon.top}px] mr-[${moon.right}px]	z-30 overflow-hidden 
          opacity-${fullMoon ? "0" : "100"}`}
        />
        <div
          className={`w-40 h-40 rounded-full ${
            fullMoon && "animate-fullmoon"
          } `}
        >
          <img src={moonsmile} alt="" />
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-2xl ml-40 w-100 text-right border-b border-white leading-4 mb-10 h-2">
            <span className="bg-moonlight md:bg-darkblue pl-4">SKILLS</span>
          </h2>
        </div>
        <div className="flex gap-3 flex-wrap justify-end z-10" ref={ref}>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 0, x: -75 },
                visible: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "anticipate" }}
            >
              <Skill skill={skill} moonHandler={moonHandler} />
            </motion.div>
          ))}
        </div>
        <div className="mr-10 flex justify-end items-end pt-2 ">
          {!fullMoon && (
            <img
              src={arrow}
              alt=""
              width="30px"
              className="pb-1 animate-pulse"
            />
          )}
          <p className="font-serif animate-pulse">
            {fullMoon ? "He smiles!" : "see the moon"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
