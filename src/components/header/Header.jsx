import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/imgs/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am a</h5>
        <h1><strong>Web Developer / Full Stack Developer</strong></h1>
        <h5 className="text-light">Dima Bezostii</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="profile" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header