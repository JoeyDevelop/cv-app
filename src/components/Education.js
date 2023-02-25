import React, { Component } from "react";
import '../styles/Education.css'

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      added: false,
      school: '',
      study: '',
      start: '',
      end: '',
    }
  }

  submit = (e) => {
    this.setState({
      submit: true
    })
  }

  edit = (e) => {
    this.setState({
      submit: false
    })
  }

  removeEducationForm = (e) => {
    this.setState({
      added: false,
      school: '',
      study: '',
      start: '',
      end: '',
    })
  }

  addEducation = (e) => {
    this.setState({
      added: true
    })
  }

  schoolChange = (e) => {
    this.setState({
      school: e.target.value
    })
  }

  studyChange = (e) => {
    this.setState({
      study: e.target.value
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
    const {submit, added, school, study, start, end} = this.state
    return (
      <div className="educationDiv">

        {/* Add form is state.added === true */}
        {added ?
          <div>
            <form className="eduFormDiv">
              <div className="grid">
                <label>School Name:</label>
                <label>Area of Study:</label>
                <label>Start Date:</label>
                <label>End Date:</label>
              </div>
              <div className="grid1">
                {submit ? 
                  <h1>{school}</h1> :
                  <input value={school} onChange={this.schoolChange} type="text"></input>
                }
                {submit ?
                  <h1>{study}</h1> :
                  <input value={study} onChange={this.studyChange} type="text"></input>
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

              {/* Remove Form */}
              {submit ?
                null :
                <button onClick={this.removeEducationForm}>Delete</button>
              }
            </div>
          </div> :
          null
        }

        {/* Hide button on submit */}
        {submit || added ?
        null :
        <button onClick={this.addEducation} className="addEducation">Add</button>
        }
      </div>
    )
  }
}

export default Education