import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import SearchList from "./SearchList";

const Header = () => {
  const [search, setSearch] = useState("");
  const [communities, setCommunities] = useState([]);
  const [searchCommunities, setSearchCommunities] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/searchcommunity?community_name=${search}`)
      .then((res) => res.json())
      .then((data) => setCommunities(data))
      .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    fetch(`http://localhost:8080/getAllCommunities`)
      .then((res) => res.json())
      .then((data) => setSearchCommunities(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="headerInfo">
        <div className="mt-[-140px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
        <p className="text-blue-500 font-bold p-2 uppercase">
            The best way to find parks in Calgary
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            YYC-PARKS
        </h1>
        <div className="flex justify-center items-center pt-2">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Find equipment in
            </p>
            <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-3 text-blue-500"
            strings={searchCommunities}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
        </div>
    </div>

    <div className="  mt-[-200px] text-center flex flex-col text-white">
        <p className="md:text-2xl texl-xl font-bold text-gray-500">
            Start by searching for a community
        </p>
        <input
            className={search ? 'p-3 flex rounded-t-md md:mx-32 lg:mx-36 mx-5 pt-3 mt-3 text-black': 'p-3 flex rounded-md md:mx-32 lg:mx-36 mx-5 pt-3 mt-3 text-black'}
            type="text"
            value={search}
            id="search"
            onChange={(e) => setSearch(e.target.value)}
        />
            {search && communities && <SearchList list={communities.slice(0,3)} />}
        </div>

    </div>
  );
};

export default Header;
