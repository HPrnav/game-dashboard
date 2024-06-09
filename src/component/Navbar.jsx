/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/logo.png'

function navbar() {
  return (
    <div className='p-2 rounded-md' >
    <div className='flex justify-between items-center text-xs md:text-lg shadow-lg  '>
    <div className='flex items-center font-bold text-red-600 font-serif '>
   <img src={logo} alt="" className='h-16' />
   <p>Redos</p>
    </div>
   <ul className='flex gap-7'>
    <li className='hover:font-bold cursor-pointer' >HOME</li>
    <li className='hover:font-bold cursor-pointer'>ABOUT US</li>
    <li className='hover:font-bold cursor-pointer'>BLOGS</li>
    <li className='hover:font-bold cursor-pointer'>WISHLIST</li>
   </ul>
   <button className='shadow-md text-yellow-50 rounded-full pr-1.5 pl-1.5 bg-slate-800'>LOGIN</button>
    </div>

    </div>

  )
}

export default navbar