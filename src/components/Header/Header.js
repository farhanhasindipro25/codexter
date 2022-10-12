import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-900 pb-10 lg:max-w-7xl md:max-w-xl sm:max-w-xs max-w-xs">
      <div className="hero mt-10">
        <div className="hero-content rounded-lg flex-col lg:flex-row bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            className="lg:max-w-xl md:max-w-xl rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="lg:text-5xl md:text-4xl text-xl sm:text-xl font-bold px-6 mt-5">
              TEST YOUR SKILLS NOW!
            </h1>
            <p className="py-6 px-6 sm:text-left text-left">
              Try Codexter quizzes on your favourite programming topics and
              assess your skill level. See your marks represented graphically,
              and also read blogs on various programming topics.
            </p>
            <button className="btn btn-primary ml-6 md:mb-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
