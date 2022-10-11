import React from "react";

const NotFound404 = () => {
  return (
    <div>
      <div className="bg-orange-100 dark:bg-red-600 h-[1000px] flex items-center justify-center flex-col">
        <iframe
          src="https://giphy.com/embed/SDUiharA58JhGCwDqP"
          width="180"
          height="180"
          frameBorder="0"
          class="giphy-embed rounded-full"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/error-404-freshcake-SDUiharA58JhGCwDqP">
            via GIPHY
          </a>
        </p>
        <h3 className="text-center font-bold text-2xl text-slate-900 dark:text-white">
          404: That address could not be found.
        </h3>
      </div>
    </div>
  );
};

export default NotFound404;
