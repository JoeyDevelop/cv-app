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
    const {submit, first, last, email, phone} = this.state
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
            {submit ?
              <h1>{first}</h1> :
              <input value={first} onChange={this.firstChange} type="text"></input>
            }
            {submit ?
              <h1>{last}</h1> :
              <input value={last} onChange={this.lastChange} type="text"></input>
            }
            {submit ?
              <h1>{email}</h1> :
              <input value={email} onChange={this.emailChange} type="text"></input>
            }
            {submit ?
              <h1>{phone}</h1> :
              <input value={phone} onChange={this.phoneChange} type="text"></input>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default Personal