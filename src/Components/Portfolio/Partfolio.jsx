import React from "react";
import { RevealTitle } from "../utils/RevealPort";
import pathetica from "../../media/pathetica.png";
import quizlet from "../../media/quizlet.jpeg";

import mongodb from "../../media/mongodb.png";

import react from "../../media/react.png";
import node from "../../media/node.png";
import mui from "../../media/mui.png";
import express from "../../media/express.png";
import redux from "../../media/redux.png";
import bootstrap from "../../media/bootstrap.png";
import firebase from "../../media/firebase.png";
import mysql from "../../media/mysql.png";
import youFree from "../../media/youFree.png";
import expenseproject from "../../media/expenseProject.png";

import "./style.css";
import Project from "./Project";

const data = [
  {
    name: "Pathetica: A social app",
    image: pathetica,
    desc: "It's a MERN stack with an MVC architecture. Includes login authentication, http routing, redux state management, responsive design, & image uploading. Add, comment, & like posts.",
    skills: [mongodb, react, mui, express, node, redux],
    url: "https://youtu.be/XTOplixRqmE",
    github: "https://github.com/hansonliao98/pathetica",
    private: false,
  },
  {
    name: "SightExpense",
    image: expenseproject,
    desc: "This is an expense tracker for visual thinkers. Utilizes Firebase as a database, pre-rendering data manipulation, and an interactive total expense chart to visualize monthly total costs.",
    skills: [firebase, react, redux],
    url: "https://youtu.be/oc3GII3caY4",
    github: "https://github.com/hansonliao98/SightExpense",
    private: false,
  },
  {
    name: "YouFree: Youtube without Ads",
    image: youFree,
    desc: "This utlizes a restAPI to perform CRUD actions. Includes a search function, customized topics, & a channel detail page. ",
    skills: [react, mui],
    url: "https://youtu.be/JAfy0gAE0yU",
    github: "https://github.com/hansonliao98/youfree",
    private: false,
  },
  {
    name: "UNDER WORKS: Quizlow App",
    image: quizlet,
    desc: "My friend was too poor to buy Quizlet, so I made him one better. Designed on Figma with an emphasis on UX & usability.",
    skills: [mysql, react, bootstrap, node, redux],
    url: "",
    github: "",
    private: true,
  },
];

const Partfolio = ({ loadVideoHandler }) => {
  return (
    <div id="portfolio">
      <RevealTitle>
        <h2 className="mx-10 md:mx-20 text-2xl mr-80 w-2/6 text-left border-b border-white leading-4 mb-10 h-2">
          <span className="bg-moonlight pr-4">WORK</span>
        </h2>
      </RevealTitle>
      <div className="grid md:grid-cols-2 mx-3 md:mx-20 pb-20 gap-6">
        {data.map((post, key) => (
          <Project
            key={key}
            post={post}
            loadVideoHandler={loadVideoHandler}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Partfolio;
