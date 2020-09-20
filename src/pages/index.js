import React, { Fragment } from "react"
import Layout from "../components/Layout"
import heroStyle from "../components/styles/Hero.module.css"
import containerStyle from "../components/styles/Container.module.css"
import marginStyle from "../components/styles/Margin.module.css"
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
            <p className={heroStyle.Hi}>Hey! I'm Jay</p>
            <h1 className={heroStyle.WhoAmI}>
              I'm a Full Stack JavaScript Developer with passion for Design
            </h1>
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
            <div className={marginStyle.M3}>
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
        <div className={heroStyle.Card}>Card 1</div>
        <div className={heroStyle.Card}>Card 2</div>
        <div className={heroStyle.Card}>Card 3</div>
      </div>
      <div>This is section 2</div>
    </Layout>
  )
}
