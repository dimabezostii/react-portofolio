import React from 'react'
import './about.css'
import ME from '../../assets/imgs/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

function About() {
  return (
    <section id="about">
      <h5 className="text-light">Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        {/* img container */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        {/* content container */}
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum optio deserunt, reprehenderit voluptatem asperiores. Iusto placeat tempore fuga blanditiis amet, incidunt modi alias beatae dolorem rem earum laborum libero, esse eligendi iure ipsum reprehenderit quis nemo, in iste. Adipisci quae sunt dolore laborum quo reprehenderit tempora atque aut autem?
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About