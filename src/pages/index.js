import React, { Fragment } from "react"
import Layout from "../components/Layout"
import heroStyle from "../components/styles/Hero.module.css"
import containerStyle from "../components/styles/Container.module.css"
import Buttons from "../components/styles/Button.module.css"
import Avatar from "../assets/images/avatar.png"

export default function Home() {
  return (
    <Layout>
      <div className={heroStyle.Hero}>
        <div className={`${containerStyle.Medium} text-center`}>
          <img className={heroStyle.Avatar} src={Avatar} width="180px" />
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
            <button className={Buttons.Btn}>Get in Touch</button>
            <button>Resume</button>
          </div>
        </div>
      </div>
      <div>askdnaklndnaslndslakn/</div>
    </Layout>
  )
}
