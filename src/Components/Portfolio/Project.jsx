import React, { useContext, useEffect, useState } from "react";
import { RevealBox } from "../utils/RevealPort";
// import githubBig from "../../images/githubBig.svg";
import githubBig2 from "../../images/githubBig2.png";
import laptop2 from "../../images/laptop2.png";
import { userContext } from "../../Context/userContext";
import github from "../../images/github.png";

const Project = ({ post }) => {
  const { setIsVideo, loadVideoHandler } = useContext(userContext);

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

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  console.log(post.private);

  return (
    <div
      href="##"
      className=" ease-in duration-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RevealBox>
        <div className="backdrop-blur-lg flex flex-col border rounded-lg border-slate-400">
          {hover && isDesktop && post.github && post.url && (
            <div className=" absolute flex w-full h-full justify-center items-center transition ease-in duration-75 hover:bg-slate-700/80 rounded-lg">
              <a href={post.github} rel="noreferrer" target="_blank">
                <img
                  src={githubBig2}
                  alt=""
                  className="transition ease-in duration-75 m-3 h-28 hover:scale-105 "
                />
              </a>
              <button onClick={() => loadVideoHandler(post.url)}>
                <img
                  src={laptop2}
                  alt=""
                  width="auto"
                  height="200rem"
                  className=" transition ease-in duration-75 m-3 h-28 hover:scale-105 "
                />
              </button>
            </div>
          )}

          <img
            src={post.image}
            alt=""
            style={{
              width: "auto",
              height: "15rem",
              objectFit: "cover",
            }}
            className="rounded-t-lg"
          />
          {/* ADD HOVER ELEMENT HERE */}
          <div
            className="p-4  bg-slate-700 rounded-b-lg -z-1 "
            style={{ minHeight: "6rem" }}
          >
            <h3 className="text-xl mb-2 font-bold"> {post.name} </h3>
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
            {!isDesktop && post.github && post.url && (
              <div className="grid gap-3 grid-cols-2 uppercase font-mono">
                <a
                  href={post.github}
                  target="_blank"
                  className="bg-green-600 p-3 px-8 w-full flex items-center justify-center rounded-md hover:bg-green-500	"
                >
                  <p>Github&nbsp;</p>
                  <img src={github} alt="" width="18px" />
                </a>
                <a
                  href={post.url}
                  className="bg-purple-600 p-3 px-8 w-full flex items-center justify-center rounded-md hover:bg-purple-500"
                  target="_blank"
                >
                  <p>Demo&nbsp;</p>
                  <img src={laptop2} alt="" width="18px" />
                </a>
              </div>
            )}
          </div>
        </div>
      </RevealBox>
    </div>
  );
};

export default Project;
