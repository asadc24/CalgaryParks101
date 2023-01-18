import React from 'react'
import { useParams } from 'react-router-dom'



const InfoText = () => {
    const { community_name } = useParams();


  return (
    <div className='text-black flex justify-center '>
        <h2 className='md:text-4xl sm:text-3xl text-2xl pt-7'>Welcome to the community of {capitalizeWords(community_name.substring(1))}</h2>
    </div>
    
  )
}

// Helper function to capitalize the first letter of each word in js
function capitalizeWords(str) {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

export default InfoText