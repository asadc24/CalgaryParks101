import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-blue-500">YYC-PARKS</h1>
      <ul className="flex">
        <Link to={"/"}>
          <li className="p-4">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="p-4">About</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
