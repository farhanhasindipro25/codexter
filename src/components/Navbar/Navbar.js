import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-800">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <NavLink
            to="/topics"
            className="btn btn-ghost normal-case font-bold text-xl"
          >
            CODEXTER
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/topics" className="normal-case">
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats" className="normal-case">
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="normal-case">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
