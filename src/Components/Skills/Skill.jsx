import React, { useState } from "react";

const Skill = ({ skill, moonHandler }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(true);
    moonHandler();
  };

  return (
    <button
      onClick={onClickHandler}
      className={` skill uppercase ${
        isClicked
          ? "bg-green-600 rounded-md transition-all ease-linear"
          : "rounded-full"
      }`}
      disabled={isClicked ? true : false}
    >
      {skill}
    </button>
  );
};

export default Skill;
