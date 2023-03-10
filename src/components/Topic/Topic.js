import React from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;

  const navigate = useNavigate();
  const goToQuestions = () => {
    navigate(`/topics/${id}`);
  };

  return (
    <div>
      <div className="card lg:w-96 md:w-80 sm:w-80 w-80 bg-slate-800 shadow-xl container mx-auto">
        <figure>
          <img src={logo} className="bg-slate-700" alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Total Questions: {total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={goToQuestions}>
              START QUIZ
              <ArrowSmallRightIcon className="h-5 w-5 text-white pl-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
