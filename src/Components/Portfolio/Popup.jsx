import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { userContext } from "../../Context/userContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Popup = () => {
  const { isVideo, setIsVideo, URL } = useContext(userContext);
  console.log(URL);

  return (
    <>
      {isVideo && (
        <div
          className="transition duration-150 popup fixed z-30 w-full h-full bg-slate-800/80 flex p-10"
          onClick={() => setIsVideo(false)}
        >
          <div className="popup-inner w-full">
            <ReactPlayer
              url={URL}
              width="80%"
              height="85%"
              style={{ backgroundColor: "black", margin: "auto" }}
            />
            <button className=" flex w-full justify-center p-7">
              <HighlightOffIcon
                className=" ease-in transition-all duration-150 scale-150 bg-red-500 hover:bg-red-400 rounded-full "
                onClick={() => setIsVideo(false)}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
