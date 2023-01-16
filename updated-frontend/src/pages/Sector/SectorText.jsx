import React from 'react'
import { useParams } from 'react-router-dom'


const SectorText = () => {
    const { sector_name } = useParams();

  return (
    <div className='text-white flex justify-center '>
        <h2 className='md:text-4xl sm:text-3xl text-2xl pt-7'>Welcome to the {capitalizeWords(sector_name.substring(1))} of Calgary</h2>
    </div>
  )
}

function capitalizeWords(str) {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

export default SectorText