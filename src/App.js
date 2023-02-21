import React, { Component } from 'react';
import Personal from './components/Personal';
import './styles/Personal.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className='box'>
        <Personal />
        <div className='footer'>
          <div className='buttons'>
            <button>Edit</button>
            <button> Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
