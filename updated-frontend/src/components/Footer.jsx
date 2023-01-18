import React from 'react'
import { Link } from 'react-router-dom'
import footerImage from '../assets/logo-no-background.png'


const Footer = () => {
  return (
    <div className='mt-14 mx-auto px-4 border-t-[1px]'>

        <div className=' max-w-[1024px] mx-auto px-4 grid grid-cols-3 gap-8 text-gray-300'>
            <div >
                <img className="h-9 pl-9 mt-2" alt="" src={footerImage} />

            </div>
            <div className='col-span-2 flex justify-between mt-1'>
                    <div>
                            {/* <p className='font-medium text-gray-400'>Home</p> */}

                    </div>
                <div>
                        {/* <p className='font-medium text-gray-400'>About</p> */}

                </div>
                <div>
                    <a className='font-medium text-black' href='https://github.com/asadc24/CalgaryParks101'>Github</a>

                </div>


            </div>

        </div>
    </div>
  )
}

export default Footer