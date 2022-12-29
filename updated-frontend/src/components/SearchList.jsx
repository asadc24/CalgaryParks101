import React from 'react'
import { Link } from 'react-router-dom'

const SearchList = ({list}) => {
  return (
    <div className='bg-blue-500 text-white md:mx-32 lg:mx-36 mx-5 rounded-b-md border-2'>
        {list && list.map(item => (
            <Link to={`/community/:${encodeURIComponent(item)}`}>
                <p className='p-2 border-t-2'>{item}</p>
            </Link>
        ))}
    </div>
  )
}

export default SearchList