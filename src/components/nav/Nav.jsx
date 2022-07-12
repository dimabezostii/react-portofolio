import React, {useState} from 'react'
import './nav.css'
import {FiHome, FiUser, FiStar, FiMessageCircle} from 'react-icons/fi'
import {MdMiscellaneousServices} from 'react-icons/md'

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? "active" : ""}><FiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? "active" : ""}><FiStar /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "active" : ""}><MdMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}><FiMessageCircle /></a>
    </nav>
  )
}

export default Nav