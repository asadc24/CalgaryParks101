import React, { useState } from "react";
import { Link } from "react-router-dom";
import navImage from '../assets/logo-no-background.png'


const Navbar = () => {
  const [dropDown, setDropDown] = useState(false)
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to={"/"}>
        <img src={navImage}  className="h-16" alt="" />
      </Link>
      <ul className="flex">
        <Link to={"/"}>
          <li className="p-4">Home</li>
        </Link>
        <Link to={"/nearby"}>
          <li className="p-4">Near Me</li>
        </Link>
        <Link to={"/about"}>
          <li className="p-4">About</li>
        </Link>
        <li className="p-4">

{/* <button  onClick={() => setDropDown(!dropDown)} data-dropdown-toggle="dropdown" class="text-white  focus:outline-nonefont-medium text-center inline-flex items-center" type="button">City Sector<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
{dropDown && <div id="dropdown" className=" divide-gray-100 shadow bg-gray-500 fixed">
    <ul class="text-sm dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    <Link to={`/sector/:${encodeURIComponent("NORTHWEST")}`}>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        NORTHWEST
      </li>
      </Link>
      <Link to={`/sector/:${encodeURIComponent("NORTHEAST")}`}>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        NORTHEAST
      </li>
      </Link>
      <Link to={`/sector/:${encodeURIComponent("SOUTHEAST")}`}>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        SOUTHEAST
      </li>
      </Link>
      <Link to='/sector/:NORTH'>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        NORTH
      </li>
      </Link>
      <Link to='/sector/:EAST'>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        EAST
      </li>
      </Link>
      <Link to='/sector/:SOUTH'>
      <li className="block px-4 py-2 " onClick={() => setDropDown(!dropDown)}>
        SOUTH
      </li>
      </Link>
      <Link to='/sector/:WEST'>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        WEST
      </li>
      </Link>
      <Link to='/sector/:CENTRE'>
      <li className="block px-4 py-2" onClick={() => setDropDown(!dropDown)}>
        CENTRE
      </li>
      </Link>

    </ul>
</div>} */}

          
        </li>        
     
      </ul>
      



      


      
    </div>
    
  );
};

export default Navbar;
