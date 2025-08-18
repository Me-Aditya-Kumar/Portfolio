import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className='footer text-center'>
        <div className="footer-top mb-3">
            <img src={logo} alt="logo" className="footer-logo" />
            <p>CSE Undergrad | Software Engineer | Full Stack Developer</p>
            <p>© 2025 Aditya Kumar. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
