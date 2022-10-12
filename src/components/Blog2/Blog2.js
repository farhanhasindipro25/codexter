import React from "react";

const Blog2 = () => {
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            className="w-96"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How does ContextAPI work?</h2>
          <p>Read the latest blog on ReactJS</p>
          <div className="card-actions justify-end">
            <button className="btn">
              <label htmlFor="my-modal-2" className="btn modal-button">
                READ
              </label>
            </button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">How does ContextAPI work?</h3>
          <p className="py-4">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent
            components to parent components to child components, and so on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
