import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Header.module.css"

const Header = () => {
  return (
    <div>
        <nav>
           <div className={style.logolinks}>
           <div className='logo'>
              <a className='LOGO' href="">LOGO</a>
            </div>
            <div className={style.headernav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </div>
           </div>
        </nav>

    </div>
  )
}

export default Header