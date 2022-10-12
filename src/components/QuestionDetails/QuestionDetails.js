import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuestionDetails = ({ questionItem }) => {
  const { question, correctAnswer, options } = questionItem;

  return (
    <div className="mt-10 bg-slate-800 p-10 rounded-3xl">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold text-slate-400">{question}</h1>
        <EyeIcon className="h-6 w-6 text-white pl-1" />
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input type="radio" name="option1" id="option1" />
        <label htmlFor="option1">{options[0]}</label>
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input type="radio" />
        <label htmlFor="option1">{options[1]}</label>
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input type="radio" />
        <label htmlFor="option1">{options[2]}</label>
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input type="radio" />
        <label htmlFor="option1">{options[3]}</label>
      </div>
    </div>
  );
};

export default QuestionDetails;
