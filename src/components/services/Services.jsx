import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id="services">
      <h5>What I Ofer</h5>
      <h2>Services</h2>

      <div className="container services-container">

        {/* UX/UI CARD */}
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
          </ul>
        </article>
        {/* UX/UI CARD END */}

        {/* WEB DEVELOPMENT CARD */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
          <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT CARD EBD */}

        {/* CONTENT CREATION CARD */}
        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service-list">
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service-list-icon"/>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, blanditiis.
              </p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION CARD END */}

      </div>
    </section>
  )
}

export default Services