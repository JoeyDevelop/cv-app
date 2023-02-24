import React, { Component } from "react";
import '../styles/Personal.css'

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submit: false,
      first: '',
      last: '',
      email: '',
      phone: '',
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

  firstChange = (e) => {
    this.setState({
      first: e.target.value
    })
  }

  lastChange = (e) => {
    this.setState({
      last: e.target.value
    })
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  phoneChange = (e) => {
    this.setState({
      phone: e.target.value
    })
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
            {this.state.submit ?
            <h1>{this.state.first}</h1> :
            <input value={this.state.first} onChange={this.firstChange} type="text"></input>
            }
            {this.state.submit ?
            <h1>{this.state.last}</h1> :
            <input value={this.state.last} onChange={this.lastChange} type="text"></input>
            }
            {this.state.submit ?
            <h1>{this.state.email}</h1> :
            <input value={this.state.email} onChange={this.emailChange} type="text"></input>
            }
            {this.state.submit ?
            <h1>{this.state.phone}</h1> :
            <input value={this.state.phone} onChange={this.phoneChange} type="text"></input>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default Personal