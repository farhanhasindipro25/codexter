import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuestionDetails from "../QuestionDetails/QuestionDetails";

const Questions = () => {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const questions = useLoaderData();
  console.log(questions);

  const totalQuestions = questions.data.total;
  const totalMarks = ((correctCount / totalQuestions) * 100).toFixed(2);

  return (
    <div>
      <div className="container mx-auto bg-slate-900 mt-20">
        <div className="mb-16 container mx-auto">
          <h1 className="font-bold text-white mb-5 lg:ml-0 md:ml-20 sm:ml-7 ml-7">
            Instructions:
          </h1>
          <ul className="list-disc text-slate-200 lg:ml-5 text-sm lg:w-full md:w-9/12 md:container md:mx-auto sm:w-4/5 w-4/5 sm:ml-10 ml-10">
            <li>
              If you select the correct answer, the option box will turn green.
              If you select an incorrect answer, the option box will turn red.
            </li>
            <li>
              In both cases, you will receive a notification on the bottom right
              of your screen on desktops/laptops/tablets and on the top of your
              screen on mobile.
            </li>
            <li>
              There is an eye icon on top right of each question. You can click
              on it to view the correct answer.
            </li>
            <li>
              After finishing the quiz, you can view the correct and incorrect
              answer counts along with the marks you scored on the top.
            </li>
          </ul>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col items-center lg:justify-start md:justify-center sm:justify-center justify-center gap-5">
          <h1 className="bg-green-500 w-44 py-3 rounded-xl text-xl font-bold text-center text-slate-900">
            Correct: {correctCount}
          </h1>
          <h1 className="bg-red-600 w-44 py-3 rounded-xl text-xl font-bold text-center text-white">
            Incorrect: {incorrectCount}
          </h1>
          <h1 className="bg-slate-800 w-56 py-3 rounded-xl text-xl font-bold text-center text-indigo-500">
            Marks: {totalMarks} %
          </h1>
        </div>
      </div>
      <div className="container mx-auto pb-10">
        <h1 className="text-2xl mt-10 font-semibold">
          <span className="text-indigo-500 font-bold md:ml-10 sm:ml-8 ml-8">
            {questions.data.name}
          </span>{" "}
          Quiz
        </h1>
        {questions.data.questions.map((questionItem) => (
          <QuestionDetails
            key={questionItem.id}
            questionItem={questionItem}
            setCorrectAnswer={setCorrectAnswer}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          ></QuestionDetails>
        ))}
      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-slate-200">
            {" "}
            The correct answer is:{" "}
            <span className="text-green-500">{correctAnswer}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Questions;
