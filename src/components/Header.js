import React, { Component } from "react";
import '../styles/Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {title} = this.props
    return (
      <h1 className="header"><u>{title}</u></h1>
    )
  }
}

export default Header