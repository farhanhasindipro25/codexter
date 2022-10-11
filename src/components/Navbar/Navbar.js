import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-800">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <NavLink to="/topics"
          className="btn btn-ghost normal-case font-bold text-xl">
          CODEXTER
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Quiz Topics</a>
            </li>
            <li>
              <a>Performance Statistics</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
