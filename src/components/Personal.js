import React, { Component } from "react";
import '../styles/Personal.css'

class Personal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form className='section'>
          <div className='grid'>
            <label>First name: </label>
            <label>Last name: </label>
            <label>Email: </label>
            <label>Phone number: </label>
          </div>
          <div className='grid1'>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Personal