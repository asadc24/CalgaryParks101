import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import './Community.css'
import Info from './Info'

const Community = () => {
  const { community_name } = useParams()




  return (
    <div className="community">
      <Navbar/>
      <Info/>


    </div>
  )
}

export default Community