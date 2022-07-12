import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/dumitru-bezostii-54084b20a/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/dimabezostii" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/dimabezostii/" target="_blank"><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials