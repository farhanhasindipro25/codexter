import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
//   console.log(topics);
  return (
    <div>
      <Header></Header>
      <h1 className="pt-10 text-4xl text-center font-bold">Explore Topics</h1>

      <div className="container mx-auto mt-16 pb-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10">
          {topics.data.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
