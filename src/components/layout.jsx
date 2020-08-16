import React, { Fragment } from "react"
import { PropTypes } from "prop-types"
import "./styles/global.css"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <h1>This is header</h1>
      {children}
      <h1>This is footer</h1>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
