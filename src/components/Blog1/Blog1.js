import React from "react";

const Blog1 = () => {
  return (
    <div className="mx-auto">
      <div className="card lg:w-96 md:w-80 sm:w-80 w-80 bg-base-100 shadow-xl">
        <figure>
          <img src="https://reactrouter.com/ogimage.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Purpose of React Router!</h2>
          <p>Read the latest blog on ReactJS</p>
          <div className="card-actions justify-end">
            <button className="btn">
              <label htmlFor="my-modal-1" className="btn modal-button">
                READ
              </label>
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Purpose of React Router!</h3>
          <p className="py-4">
            ReactJS Router is mainly used for developing Single Page Web
            Applications. It basically allows to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route. Even a
            non-existent route can also be defined. Data from API's can be
            loaded, pages can be navigated using various hooks, which overally
            increases the performance and reduces the hassle of reloading every
            page, by maintaining a Single Page Application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
