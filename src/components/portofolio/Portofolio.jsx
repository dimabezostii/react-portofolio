import React from 'react'
import './portofolio.css'
import acheref from '../../assets/imgs/acheref.png'
import digitalAgency from '../../assets/imgs/digital-agency.png'
import recipeapp from '../../assets/imgs/recipeapp.png'
import shopPage from '../../assets/imgs/shop-page.png'
import socialmediaPage from '../../assets/imgs/socialmedia-page.png'

const data = [
  {
    id: 0,
    image: acheref,
    title: "AcheRef",
    demo: "https://acheref.fr",
    isDemo: true
  },
  {
    id: 1,
    image: digitalAgency,
    title: "Digital Agency",
    demo: "",
    isDemo: false
  },
  {
    id: 2,
    image: recipeapp,
    title: "Recipe Application",
    demo: "",
    isDemo: false
  },
  {
    id: 3,
    image: shopPage,
    title: "Simple Page",
    demo: "",
    isDemo: false
  },
  {
    id: 4,
    image: socialmediaPage,
    title: "Socialmedia Page",
    demo: "",
    isDemo: false
  }
]

function Portofolio() {

  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio-container">
        {
          data.map(({id, image, title, demo, isDemo}) => {
            return (
              <article key={id} className="portofolio-item">
                <div className="portofolio-item-image">
                  <img src={image} alt="project" />
                </div>
                <h3>{title}</h3>
                <div className="portofolio-item-cta">
                  <a href="https://github.com/dimabezostii" className="btn" target="_blank" rel="noreferrer">Github</a>
                  {isDemo ? <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a> : ""}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio