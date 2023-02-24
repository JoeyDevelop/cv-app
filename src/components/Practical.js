import React, { Component } from "react";
import PractForm from "./PractForm";

class Practical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      added: false
    }
  }

  removePracticalForm = (e) => {
    this.setState({
      added: false
    })
  }

  addPractical = (e) => {
    this.setState({
      added: true
    })
  }

  render() {
    return (
      <div>
        <div className="educationDiv">
        {this.state.added ?
        <PractForm delete={this.removePracticalForm} /> :
        null
        }
        {this.state.added ?
        null :
        <button onClick={this.addPractical} className="addEducation">Add</button>
        }
      </div>
      </div>
    )
  }
}

export default Practical