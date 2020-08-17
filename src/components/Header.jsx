import React from "react"
import Styles from "./styles/Header.module.css"

const Header = props => {
  return (
    <nav className={Styles.Nav}>
      <div className="container">
        <div className={Styles.navLinks}>
          <a className="">Navbar</a>
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
