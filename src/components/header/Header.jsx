import React from 'react'
import Navbar from './Navbar'
import './header.css'

const Header = () => {

  const handleClick=()=>(
    window.scroll(0,0)
  )
  return (
    <div className="header">
        
        <span className="head" onClick={handleClick}>
            Entertainment Hub
        </span>
        <Navbar/>
        
    </div>
  )
}

export default Header