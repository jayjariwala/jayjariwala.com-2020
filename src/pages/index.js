import React, { Fragment } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGem,
  faPaintBrush,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons"
import { Grid } from "@material-ui/core"
import Layout from "../components/Layout"
import heroStyle from "../components/styles/Hero.module.css"
import containerStyle from "../components/styles/Container.module.css"
import marginStyle from "../components/styles/Margin.module.css"
import GridStyle from "../components/styles/Grid.module.css"
import Buttons from "../components/styles/Button.module.css"
import Avatar from "../assets/images/avatar.png"
import Section1 from "../assets/images/section-1.png"

export default function Home() {
  return (
    <Layout>
      <div className={heroStyle.Hero}>
        <div className={`${containerStyle.Medium} text-center`}>
          <img className={heroStyle.Avatar} src={Avatar} width="160px" />
          <div className={heroStyle.Introduction}>
            <p className={heroStyle.Hi}>Hello! Thanks for visiting this website</p>
            <h1 className={heroStyle.WhoAmI}>
              My name is Jay. I'm a Full Stack JavaScript Developer with passion for {""}
              <span className="highlight">Design</span>
            </h1>
            <div className={heroStyle.SubIntro}>
            <p>
              I specialize in Website and Web application development using
              HTML5, CSS3, JavaScript, React JS, Angular, NodeJS and MongoDB. I
              design website mockups using Sketch and adobe xd. Professionally,
              I’ve worked on several contract roles and contributed my skillset
              for the verity of domains like Transportation, Military and
              Education.
            </p>
            <p>
              When not coding, I enjoy outdoor games like Tennis, Cricket and
              Skating. I like to roam around in nature, working out at the gym,
              and taking pictures using my DSLR.
            </p>
            </div>
            <div className={marginStyle.M6}>
              <button
                className={`${Buttons.Btn} ${Buttons.Btn_primary} ${Buttons.Btn_lg} `}
              >
                Get in Touch
              </button>
              <button className={`${Buttons.Btn} ${Buttons.Btn_lg}`}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${heroStyle.Section1} `}>
        <h2>I love working with cutting edge technolgies</h2>
        <p className={marginStyle.M2}>Things I am good at...</p>
      </div>
      <div className={`${heroStyle.Technologies} ${containerStyle.Medium}`}>
        <div className={heroStyle.Card}>
          <div className={heroStyle.Round}>
            <FontAwesomeIcon icon={faGem} size="2x" />
          </div>
          <h3>UI Design</h3>
          <p>
            I love beautiful interfaces with great typography and vibrant
            colors. I design websites and web application mockups in Adobe XD
            and convert them into high-fidelity prototype{" "}
          </p>
        </div>
        <div className={heroStyle.Card}>
          <div className={heroStyle.Round}>
            <FontAwesomeIcon icon={faPaintBrush} size="2x" />
          </div>
          <h3>Websites & SPAs</h3>
          <p>
            I develop pixel perfect, cross browser compatible, and responsive
            websites using HTML5, CSS3 and JavaScript. I also develop Single
            Page Application frontend using React and Angular
          </p>
        </div>
        <div className={heroStyle.Card}>
          <div className={heroStyle.Round}>
            <FontAwesomeIcon icon={faDatabase} size="2x" />
          </div>
          <h3>Backend Microservices & API</h3>
          <p>
            I create REST API & Microservices using NodeJS, ExpressJS and
            MongoDB database. I host application in production using Digital
            Ocean & Netlify
          </p>
        </div>
      </div>
    </Layout>
  )
}
