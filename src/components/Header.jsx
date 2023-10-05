import React from 'react';
import  {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
    <div>
        <div className="scroll-up-btn">
            <i className="fas fa-angle-up"></i>
        </div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><HashLink href="#">Portfo<span>lio.</span></HashLink></div>
                <ul className="menu">
                    <li><HashLink to="#home" className="menu-btn">Home</HashLink></li>
                    <li><HashLink to="#about" className="menu-btn">About</HashLink></li>
                    <li><HashLink to="#education" className="menu-btn">Education</HashLink></li>
                    <li><HashLink to="#skills" className="menu-btn">Skills</HashLink></li>
                    <li><HashLink to="#certificates" className="menu-btn">Certifications</HashLink></li>
                    <li><HashLink to="#projects" className="menu-btn">Projects</HashLink></li>
                    <li><HashLink to="#contact" className="menu-btn">Contact</HashLink></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
