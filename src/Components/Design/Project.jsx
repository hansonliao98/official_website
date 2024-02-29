import React, { useContext, useEffect, useState } from "react";
import { RevealBox } from "../utils/RevealPort";
import laptop2 from "../../images/laptop2.png";
import { userContext } from "../../Context/userContext";

const Project = ({ post }) => {
  const { setIsVideo, loadVideoHandler } = useContext(userContext);
  const [count, setCount] = useState(0);
  const [skills, setSkills] = useState([]);

  const [hover, setHover] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 544) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 544) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // const handle = () => {
  //   var machine = setInterval(() => {
  //     // Note useing the callback function, so `arr` isn't stale
  //     // in this callback
  //     // console.log(post.skills[0]);
  //     // console.log(skills.length);
  //     // console.log(post.skills.length);
  //     setSkills((oldSkills) => [...oldSkills, post.skills[count]]);
  //     setCount((oldCount) => oldCount + 1);
  //     console.log(count);
  //     console.log(skills);

  //     if (skills.length === post.skills.length) {
  //       clearInterval(machine);
  //     }
  //   }, 10000);
  // };
  // handle();
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  console.log(post.private);

  return (
    <div
      className=" ease-in duration-100 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RevealBox>
        <div className="flex overflow-auto flex-col backdrop-blur-lg border rounded-lg border-slate-400">
          {hover && isDesktop && (
            <div className="  absolute flex w-full h-full justify-center items-center transition ease-in duration-75 rounded-lg hover:bg-slate-700/80 ">
              <a href={post.url} target="_blank" className="">
                <img
                  src={laptop2}
                  alt=""
                  className=" transition ease-in duration-75 m-3 h-28 hover:scale-105 "
                />
              </a>
            </div>
          )}

          <img
            src={post.image}
            alt=""
            style={{
              width: "auto",
              height: "13rem",
              objectFit: "cover",
            }}
            className="rounded-t-lg  md:rounded-l-lg md:rounded-r-none"
          />
          {/* ADD HOVER ELEMENT HERE */}

          <div
            className="p-4  bg-slate-700 rounded-b-lg md:rounded-b-none md:rounded-r-lg -z-1"
            style={{ minHeight: "6rem" }}
          >
            <h3 className="text-xl mb-2 "> {post.name} </h3>
            <p
              className={`text-sm transition-all ease-in duration-150 mb-2
              
              `}
            >
              {post.desc}
            </p>
            <div className="flex flex-row transition-all duration-150 w-fit overflow-hidden mb-10 md:mb-0 gap-1">
              {post.skills.map((skill) => (
                <img src={skill} alt="" className="w-6 h-6" />
              ))}
            </div>
            {!isDesktop && post.url && (
              <a
                href={post.url}
                className="bg-purple-600 w-full flex items-center p-3 uppercase font-mono justify-center rounded-md hover:bg-purple-500"
                target="_blank"
              >
                <p>Preview&nbsp;</p>
                <img src={laptop2} alt="" width="18px" />
              </a>
            )}
          </div>
        </div>
      </RevealBox>
    </div>
  );
};

export default Project;
