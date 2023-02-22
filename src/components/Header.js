import React, { Component } from "react";
import '../styles/Header.css'

class Header extends Component {

  render() {
    const {title} = this.props
    return (
      <h1 className="header"><u>{title}</u></h1>
    )
  }
}

export default Header