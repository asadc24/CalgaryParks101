import React from 'react'
import { Link } from 'react-router-dom'
import './SearchList.css'

const SearchList = ({list}) => {
  return (
    <div className="searchList">
        {list && list.map(item => (
            <Link to={`/community/:${item}`} style={{ textDecoration: 'none' }}>
                <p>{item}</p>
            </Link>
        ))}
    </div>
  )
}

export default SearchList