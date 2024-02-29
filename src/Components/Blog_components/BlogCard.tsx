import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ title, body, tags, image }) => {
  return (
    <Link to="/" className="w-1/3">
      <div className=" bg-slate-500 rounded-lg m-2 border border-solid border-slate-600">
        <img
          src={image}
          alt=""
          className="w-full rounded-t-lg h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="title-clamping text-xl mb-2">{title} </h2>
          <p className="clamping text-sm">{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
