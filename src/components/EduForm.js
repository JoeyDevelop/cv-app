import React, { Component } from "react";

class EduForm extends Component {

  render() {
    return (
      <div>
        <form className="eduFormDiv">
          <div className="grid">
            <label>School Name:</label>
            <label>Area of Study:</label>
            <label>Start Date:</label>
            <label>End Date:</label>
          </div>
          <div className="grid1">
            <input type="text"></input>
            <input type="text"></input>
            <input type="date"></input>
            <input type="date"></input>
          </div>
        </form>
        <div className="eduFormButtons">
          <button onClick={this.props.delete}>Delete</button>
          {/* <button>Submit</button> */}
        </div>
      </div>
    )
  }
}

export default EduForm