import React, { Component } from "react";

class PractForm extends Component {

  render() {
    return (
      <div>
        <form className="eduFormDiv">
          <div className="grid">
            <label>Company Name:</label>
            <label>Title of Study:</label>
            <label>Job Responsibilities:</label>
            <label>Start Date:</label>
            <label>End Date:</label>
          </div>
          <div className="grid1">
            <input type="text"></input>
            <input type="text"></input>
            <textarea className="practTextArea"></textarea>
            <input type="date"></input>
            <input type="date"></input>
          </div>
        </form>
        <div className="eduFormButtons">
          <button onClick={this.props.delete}>Delete</button>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default PractForm