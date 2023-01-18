import React from 'react'

const AboutInfo = () => {
  return (
    <div className="aboutinfo">
        <div className=" w-full h-[475px] mx-auto text-center text-black">
            <h1 className='font-bold text-2xl text-emerald-600 mt- mb-3'>ABOUT YYC-PARKS</h1>
            <p className='pb-9'>This app was created as a personal project by Asad, a student at the University of Calgary.</p>
            <p>Information about the implementation of the project can be found on <a className='text-emerald-600' href="https://github.com/asadc24/CalgaryParks101">Github</a>.</p>
        </div>
    </div>
  )
}

export default AboutInfo