import React from "react"
import Styles from "./styles/Navbar.module.css"
import logo from "../assets/images/logo.png"
import mobileLogo from "../assets/images/mobile-logo.png"

const Header = props => {
  return (
    <nav className={Styles.Nav}>
      <div className="container">
        <div className={Styles.navLinks}>
          <a href="">
            <img src={logo} width="180px" className={Styles.Logo} />
            <img src={mobileLogo} width="80px" className={Styles.mobileLogo} />
          </a>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
