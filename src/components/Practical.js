import React, { Component } from "react";

class Practical extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      added: false,
      company: '',
      title: '',
      responsibilities: '',
      start: '',
      end: '',
    }
  }

  submit =(e) => {
    this.setState({
      submit: true
    })
  }

  edit = (e) => {
    this.setState({ 
      submit: false
    })
  }

  removePracticalForm = (e) => {
    this.setState({
      added: false,
      company: '',
      title: '',
      responsibilities: '',
      start: '',
      end: '',
    })
  }

  addPractical = (e) => {
    this.setState({
      added: true
    })
  }

  companyChange = (e) => {
    this.setState({
      company: e.target.value
    })
  }

  titleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  responsibilitiesChange = (e) => {
    this.setState({
      responsibilities: e.target.value
    })
  }

  startChange = (e) => {
    this.setState({
      start: e.target.value
    })
  }

  endChange = (e) => {
    this.setState({
      end: e.target.value
    })
  }

  render() {
    const {submit, added, company, title, responsibilities, start, end } = this.state 
    return (
      <div>
        <div className="educationDiv">
        {this.state.added ?
        <div>
          <form className="eduFormDiv">
            <div className="grid">
              <label>Company Name:</label>
              <label>Title of Job:</label>
              <label>Job Responsibilities:</label>
              <label>Start Date:</label>
              <label>End Date:</label>
            </div>
            <div className="grid1">
              {submit ?
                <h1>{company}</h1> :
                <input value={company} onChange={this.companyChange} type="text"></input>
              }
              {submit ?
                <h1>{title}</h1> :
                <input onChange={this.titleChange} type="text"></input>
              }
              {submit ?
                <h1>{responsibilities}</h1> :
                <textarea value={responsibilities} onChange={this.responsibilitiesChange} className="practTextArea"></textarea>
              }
              {submit ?
                <h1>{start}</h1> :
                <input value={start} onChange={this.startChange} type="date"></input>
              }
              {submit ?
                <h1>{end}</h1> :
                <input value={end} onChange={this.endChange} type="date"></input>
              }
            </div>
          </form>
          <div className="eduFormButtons">
            {submit ?
              null :
              <button onClick={this.removePracticalForm}>Delete</button>
            }
          </div>
        </div> :
        null
        }
        {submit || added ?
          null :
          <button onClick={this.addPractical} className="addEducation">Add</button>
        }
      </div>
      </div>
    )
  }
}

export default Practical