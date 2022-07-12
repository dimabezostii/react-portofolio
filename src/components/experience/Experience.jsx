import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaReact, FaBootstrap, FaSass, FaWordpress, FaPhp} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiJquery, SiMysql, SiSymfony} from 'react-icons/si'

function Experience() {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">

        {/* Front end container */}
        <div className="box">
          <h3>Frontend Development</h3>
          <div className="experience-content">

            <article className="experience-details">
              <AiFillHtml5 className="experience-details-icon" />
              <div>
                <h4>HTML</h4>
                <p className="text-light">Experienced</p>
              </div>
            </article>

            <article className="experience-details">
              <FaCss3Alt className="experience-details-icon" />
              <div>
                <h4>CSS</h4>
                <p className="text-light">Experienced</p>
              </div>
            </article>

            <article className="experience-details">
              <TbBrandJavascript className="experience-details-icon" />
              <div>
                <h4>JavaScript</h4>
                <p className="text-light">Experienced</p>
              </div>
            </article>

            <article className="experience-details">
              <FaReact className="experience-details-icon" />
              <div>
                <h4>React</h4>
                <p className="text-light">Intermediate</p>
              </div>
            </article>

            <article className="experience-details">
              <SiJquery className="experience-details-icon" />
              <div>
                <h4>jQuery</h4>
                <p className="text-light">Intermediate</p>
              </div>
            </article>

            <article className="experience-details">
              <FaBootstrap className="experience-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <p className="text-light">Experienced</p>
              </div>
            </article>

            <article className="experience-details">
              <FaSass className="experience-details-icon" />
              <div>
                <h4>Sass</h4>
                <p className="text-light">Experienced</p>
              </div>
            </article>

            <article className="experience-details">
              <FaWordpress className="experience-details-icon" />
              <div>
                <h4>Wordpress</h4>
                <p className="text-light">Intermediate</p>
              </div>
            </article>

          </div>
        </div>

        {/* Backend container */}
        <div className="box">
          <h3>Backend Development</h3>
          <div className="experience-content">

              <article className="experience-details">
                <FaPhp className="experience-details-icon" />
                <div>
                  <h4>PHP</h4>
                  <p className="text-light">Experienced</p>
                </div>
              </article>

              <article className="experience-details">
                <SiMysql className="experience-details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <p className="text-light">Experienced</p>
                </div>
              </article>

              <article className="experience-details">
                <SiSymfony className="experience-details-icon" />
                <div>
                  <h4>Symfony</h4>
                  <p className="text-light">Experienced</p>
                </div>
              </article>

            </div>
        </div>

      </div>
    </section>
  )
}

export default Experience