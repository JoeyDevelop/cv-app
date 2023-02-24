import React, { Component } from 'react';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import './styles/App.css'
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.personal = React.createRef();
  }

  onSubmit = (e) => {
    this.personal.current.submit();
    this.setState({
      clicked: true
    })
  }

  onEdit = (e) => {
    this.personal.current.edit();
    this.setState({
      clicked: false
    })
  }

  render() {
    return (
      <div className='box'>
        <Header  title="Personal Information"/>
        <Personal ref={this.personal}/>
        <Header title="Education" />
        <Education />
        <Header title="Practical Experience" />
        <Practical />
        <div className='footer'>
          <div className='buttons'>
          {this.state.clicked ?
        <button onClick={this.onEdit} className='appButton'>Edit</button> :
        <button onClick={this.onSubmit} className='appButton'>Submit</button>
        }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
