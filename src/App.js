import React, { Component } from 'react';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className='box'>
        <Header  title="Personal Information"/>
        <Personal />
        <Header title="Education" />
        <Education />
        <div className='footer'>
          <div className='buttons'>
            <button className='appButton'>Edit</button>
            <button> Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
