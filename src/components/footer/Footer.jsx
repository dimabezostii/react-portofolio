import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/dima.bezostii2/">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/dimabezostii/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; inwebzone</small>
      </div>
    </footer>
  )
}

export default Footer