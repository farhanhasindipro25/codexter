import React from "react";

const Blog3 = () => {
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FqQ54hMt-NGYLeORAnfkXS4Cx2DFnUjQ5A&usqp=CAU"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">useRef() Hook</h2>
          <p>Read the latest blog on ReactJS</p>
          <div className="card-actions justify-end">
            <button className="btn">
              <label htmlFor="my-modal-3" className="btn modal-button">
                READ
              </label>
            </button>
          </div>
        </div>
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
          <h3 className="text-lg font-bold">useRef() hook.</h3>
          <p className="py-4">
            The useRef() hook ensures the persistence of values in between
            renders. It is often used to store mutable values (values that can
            be changed). This is done so that when these values are updated, any
            re-render does not occur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
