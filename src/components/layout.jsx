import React from "react"
import { PropTypes } from "prop-types"
import "./styles/global.css";
import Styles from './styles/Layout.module.css';
import Header from './Header';

class Layout extends React.Component {
  render() {
    let {children} = this.props;
    return(
    <div className={Styles.Layout}>
      <Header />
      {children}
      <h1>This is footer</h1>
    </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
