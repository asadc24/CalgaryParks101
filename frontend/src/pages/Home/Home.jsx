import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Search from '../../components/Search/Search'

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <Header/>
        <Search/>
    </div>
  )
}

export default Home