import About from "./Components/About/About.jsx";
import BannerIntro from "./Components/BannerIntro/BannerIntro.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Partfolio from "./Components/Portfolio/Partfolio.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import Popup from "./Components/Portfolio/Popup.jsx";
import { userContext } from "./Context/userContext.js";
import Design from "./Components/Design/Design.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Blog from "./Pages/Blog.tsx";
import Main from "./Pages/Main.tsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [isVideo, setIsVideo] = useState(false);
  const [URL, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setDesktop] = useState(false);

  const loadVideoHandler = (url) => {
    setIsVideo(!isVideo);
    setURL(url);
    console.log(URL);
  };

  const isLoadingHandler = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    isLoadingHandler();

    console.log(isLoading);

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
  }, [isLoading, isDesktop]);

  return (
    <div className={`text-white`}>
      <userContext.Provider
        value={{
          isVideo,
          setIsVideo,
          loadVideoHandler,
          URL,
          isDesktop,
          isLoading,
          setIsLoading,
        }}
      >
        <Popup isVideo={isVideo} setIsVideo={setIsVideo} URL={URL}>
          <h3>My popup</h3>
        </Popup>
        <Navbar className="" />
        <BannerIntro />
        <div className={`${isLoading && "hidden"}`}>
          <div>
            <Routes>
              <Route
                path="/"
                element={<Main loadVideoHandler={loadVideoHandler} />}
              />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </userContext.Provider>
    </div>
  );
}

export default App;
