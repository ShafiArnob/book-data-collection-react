import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Book Data Collection</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/display">Display</Link>
          </li>
          <li>
            <Link to="/">Create</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
