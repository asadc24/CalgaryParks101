import React from 'react'
import './SearchList.css'

const SearchList = ({list}) => {
  return (
    <div className="searchList">
        {list && list.map(item => (
            <p>{item}</p>
        ))}
    </div>
  )
}

export default SearchList