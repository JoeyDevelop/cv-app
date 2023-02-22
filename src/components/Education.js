import React, { Component } from "react";
import '../styles/Education.css'
import EduForm from "./EduForm";

class Education extends Component {
  constructor(props) {
    super()
    this.state = {
      added: false,
    }
  }

  onAddEducation = (e) => {
    this.setState({
      added: true
    })
  }

  render() {
    return (
      <div className="educationDiv">
        {this.state.added ?
        <EduForm /> :
        null
        }
        <button onClick={this.onAddEducation} className="addEducation">Add</button>
      </div>
    )
  }
}

export default Education