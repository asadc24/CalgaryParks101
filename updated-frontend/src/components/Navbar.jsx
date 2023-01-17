import React, { useState } from "react";
import { Link } from "react-router-dom";
import navImage from '../assets/logo-no-background.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to={"/"} onClick={() => setDropDown(false)}>
        <img src={navImage}  className="h-16" alt="" />
      </Link>
      <ul className="hidden md:flex">
        <Link to={"/"} onClick={() => setDropDown(false)}>
          <li className="p-4">Home</li>
        </Link>
        <Link to={"/nearby"} onClick={() => setDropDown(false)}>
          <li className="p-4">Near Me</li>
        </Link>
        <Link to={"/about"} onClick={() => setDropDown(false)}>
          <li className="p-4">About</li>
        </Link>
        <li className="p-4">

<button  onClick={() => setDropDown(!dropDown)} data-dropdown-toggle="dropdown" class="text-white  focus:outline-nonefont-medium text-center inline-flex items-center" type="button">City Sector<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
{dropDown && <div id="dropdown" className=" bg-blue-500 fixed z-10">
    <ul class="text-sm " aria-labelledby="dropdownDefaultButton">
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
</div>}

          
        </li>        
     
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <ul className={nav ? ' z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-blue-500 m-4'>YYC-PARKS</h1>
        <Link to={`/`} onClick={() => setNav(false)}>
          <li className='p-4 border-b border-gray-600'>Home</li>
        </Link>
        <Link to={`/nearby`} onClick={() => setNav(false)}>
          <li className='p-4 border-b border-gray-600'>Near Me</li>
        </Link>
        <Link to={`/about`} onClick={() => setNav(false)}>
          <li className='p-4 border-b border-gray-600'>About</li>
        </Link>
          <li className='p-4'>Sectors</li>
          <ol>
          <Link to={`/sector/:${encodeURIComponent("NORTHWEST")}`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">North West</li>
          </Link>
          <Link to={`/sector/:${encodeURIComponent("NORTHEAST")}`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">North East</li>
          </Link>
          <Link to={`/sector/:${encodeURIComponent("SOUTHEAST")}`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">South East</li>
          </Link>
          <Link to={`/sector/:NORTH`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">North</li>
          </Link>
          <Link to={`/sector/:EAST`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">East</li>
          </Link>
          <Link to={`/sector/:SOUTH`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">South</li>
          </Link>
          <Link to={`/sector/:WEST`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">West</li>
          </Link>
          <Link to={`/sector/:CENTRE`} onClick={() => setNav(false)}>
            <li className="pl-5 pb-2 text-sm">Centre</li>
          </Link>

          </ol>
      </ul>
      



      


      
    </div>
    
  );
};

export default Navbar;
