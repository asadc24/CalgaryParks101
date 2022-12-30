import React from "react";
import { Link } from "react-router-dom";
import navImage from '../assets/logo-no-background.png'


const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to={"/"}>
        <img src={navImage}  className="h-16" alt="" />
      </Link>
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
