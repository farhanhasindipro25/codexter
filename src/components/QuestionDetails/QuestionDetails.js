import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const QuestionDetails = ({ questionItem }) => {
  const { question, correctAnswer, options } = questionItem;

  const [selectedOption, setSelectedOption] = useState("");
  const isSelected = (value) => selectedOption === value;

  const handleOptionClick = (e) => setSelectedOption(e.target.value);

  // console.log(e.target.value);

  return (
    <div className="mt-10 bg-slate-800 p-10 rounded-3xl">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-bold text-slate-400">{question}</h1>
        <EyeIcon className="h-6 w-6 text-slate-400 pl-1" />
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input
          type="radio"
          name={options[0]}
          id={options[0]}
          value={options[0]}
          checked={isSelected(options[0])}
          onChange={handleOptionClick}
        />
        <label htmlFor={options[0]} className="pl-5 text-slate-300">
          {options[0]}
        </label>
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input
          type="radio"
          name={options[1]}
          id={options[1]}
          value={options[1]}
          checked={isSelected(options[1])}
          onChange={handleOptionClick}
        />
        <label htmlFor={options[1]} className="pl-5 text-slate-300">
          {options[1]}
        </label>
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input
          type="radio"
          name={options[2]}
          id={options[2]}
          value={options[2]}
          checked={isSelected(options[2])}
          onChange={handleOptionClick}
        />
        <label htmlFor={options[2]} className="pl-5 text-slate-300">
          {options[2]}
        </label>
      </div>
      <div className="bg-slate-700 my-4 p-4 rounded-lg flex items-center">
        <input
          type="radio"
          name={options[3]}
          id={options[3]}
          value={options[3]}
          checked={isSelected(options[3])}
          onChange={handleOptionClick}
        />
        <label htmlFor={options[3]} className="pl-5 text-slate-300">
          {options[3]}
        </label>
      </div>
    </div>
  );
};

export default QuestionDetails;
