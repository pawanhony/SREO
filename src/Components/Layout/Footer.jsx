import React, { useState } from 'react'
import './Footer.css'



export default function Footer() {
  const [menu,setMenu] = useState('/')
  return (
    <>
    <div className='navbar'>
        <img src='' alt='logo' className='logo'/>
        <ul className='navbar-menu'> 
            <li className={menu==="/" ? "active": ""}>Home</li>
            <li to="/about" className={menu==="about" ? "active": ""}>About</li>
            <ul title='Apply'>
                <li className={menu==="toolkit" ? "active": ""}>Tool Kit</li>
                <li className={menu==="studykit" ? "active": ""}>Study Kit</li>
            </ul>
            <li className={menu==="contact" ? "active": ""}>Contact</li>
        </ul>
        <div className="navbar-right">
        <li className={menu==="login" ? "active": ""}>Login</li>
        </div>
    </div>
    </>
  )
}
