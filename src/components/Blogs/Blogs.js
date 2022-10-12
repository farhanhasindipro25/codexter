import React from "react";
import Blog1 from "../Blog1/Blog1";
import Blog2 from "../Blog2/Blog2";
import Blog3 from "../Blog3/Blog3";

const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto mt-20 bg-slate-900 pb-96">
        <h2 className="lg:text-2xl md:text-2xl sm:text-lg text-lg font-bold text-center text-white mt-56 mb-20">
          READ BLOGS ON INTERESTING PROGRAMMING TOPICS
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10">
          <Blog1></Blog1>
          <Blog2></Blog2>
          <Blog3></Blog3>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
