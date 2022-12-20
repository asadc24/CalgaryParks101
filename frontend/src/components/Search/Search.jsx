import React from 'react'
import { useState, useEffect } from 'react'
import './Search.css'
import SearchList from '../SearchList/SearchList'

const Search = () => {
    const [search, setSearch] = useState("")
    const [communities, setCommunities] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/searchcommunity?community_name=${search}`)
        .then((res) => res.json())
        .then((data) => setCommunities(data))
        .catch((err) => console.error(err))
        
    }, [search])


  return (
    <div className="search">
        <div className="container">
            <label htmlFor="roomName">Search by community. Start typing and we will help you find a community nearby!</label>
            <input type="text" className="form-control" id="search" placeholder='Enter community here' value={search} onChange={(e) => setSearch(e.target.value)}/>


            {search && communities && <SearchList list={communities}/>}
            
            
        

        </div>

    </div>
  )
}

export default Search