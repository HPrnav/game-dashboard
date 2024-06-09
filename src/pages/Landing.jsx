/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Hero from '../component/Hero.jsx'
import Blog from '../component/Blog.jsx'
import Search from '../component/Intro.jsx'

import Footer from '../component/Footer.jsx'

function landing() {
  return (
    <div className=' '>
      <Navbar></Navbar>
      <Hero></Hero>
      <Search></Search>
      <Blog></Blog>
      <Footer></Footer>
      
    </div>
  )
}

export default landing