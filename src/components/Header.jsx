import React from "react"
import Styles from "./styles/Navbar.module.css"
import logo from "../assets/images/logo.png"
import mobileLogo from "../assets/images/mobile-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = props => {
  return (
    <nav className={Styles.Nav}>
      <div className={Styles.Container}>
        <div className={Styles.navLinks}>
          <a href="#">
            <img src={logo} width="180px" className={Styles.Logo} />
          </a>
          <div className={Styles.mobileNav}>
            <a>
              <img
                src={mobileLogo}
                width="90px"
                className={Styles.mobileLogo}
              />
            </a>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          <ul>
            <li>
              <a href="#" className={`${Styles.Underline}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={`${Styles.Underline}`}>
                Projects
              </a>
            </li>
            <li>
              <a href="#" className={`${Styles.Underline}`}>
                Certifications
              </a>
            </li>
            <li>
              <a href="#" className={`${Styles.Underline}`}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className={`${Styles.Underline}`}>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
