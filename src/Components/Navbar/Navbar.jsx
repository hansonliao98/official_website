import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useState } from "react";
import { userContext } from "../../Context/userContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import selfie from "../../images/selfie.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isDesktop, isLoading } = useContext(userContext);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const [blurNav, setBlurNav] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 400) {
      setBlurNav(true);
    } else {
      setBlurNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  if (isDesktop) {
    return (
      <>
        <div
          class={` flex sticky top-0 h-0 text-sm uppercase font-mono ${
            isLoading ? "z-9" : "z-20"
          } `}
        >
          <div
            className={`w-screen justify-end ${
              blurNav && "backdrop-blur-md shadow-md"
            } h-14 flex items-center pr-5`}
          >
            <li style={{ listStyleType: "none" }}>
              <Link to="/">Home </Link>
              <Link to="/blog"> Blog</Link>
            </li>
            <a
              href="#about"
              className="px-5 hover:underline hover:underline-offset-4"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-5 hover:underline hover:underline-offset-4"
            >
              Portfolio
            </a>
            <a
              href="#design"
              className="px-5 hover:underline hover:underline-offset-4"
            >
              Design
            </a>

            <a
              href="#contact"
              className="px-5 hover:underline hover:underline-offset-4"
            >
              Contact
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div class={`w-screen sticky h-0 ${!isLoading && "z-20"}  top-0 `}>
        <div
          className={`${isNavbarOpened && "h-screen"}`}
          onClick={() => setIsNavbarOpened(!isNavbarOpened)}
        >
          <div
            class={`flex flex-col text-md text-white shadow-lg ${
              isNavbarOpened && " bg-slate-700/70 "
            } ease-in-out transition-all duration-350`}
          >
            <div class="p-5 text-md flex justify-end backdrop-blur-md z-30">
              <MenuIcon onClick={() => setIsNavbarOpened(!isNavbarOpened)} />
            </div>
            <div
              className={`${
                isNavbarOpened ? "pt-[0px]" : "mt-[-600px]"
              } backdrop-blur-md flex flex-col w-full uppercase font-mono shadow-lg ease-in-out transition-all duration-350 `}
            >
              <a href="#home" class="p-7">
                Home
              </a>
              <a href="#about" class="p-7">
                About
              </a>
              <a href="#skills" class="p-7">
                Portfolio
              </a>
              <a href="#design" class="p-7">
                Design
              </a>
              <a href="#contact" class="p-7">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
