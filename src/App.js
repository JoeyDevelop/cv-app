import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Personal from './components/Personal';
import Education from './components/Education';
import './styles/App.css'
import Practical from './components/Practical';

const App = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log("UPDATE! 1 " + clicked)


  }, [clicked])

  const onSubmit = () => {
    setClicked(true);
  };

  const onEdit = () => {
    setClicked(false);
  };

  return (
    <div className='box'>
      <Header  title="Personal Information"/>
      <Personal clicked={clicked}/>
      <Header title="Education" />
      <Education clicked={clicked}/>
      <Header title="Practical Experience" />
      <Practical/>
      <div className='footer'>
        <div className='buttons'>
          {clicked ?
            <button onClick={onEdit} className='appButton'>Edit</button> :
            <button onClick={onSubmit} className='appButton'>Submit</button>
          }
        </div>
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       clicked: false,
//     }
//     this.personal = React.createRef();
//     this.education = React.createRef();
//     this.practical = React.createRef();
//   }

//   onSubmit = (e) => {
//     this.personal.current.submit();
//     this.education.current.submit();
//     this.practical.current.submit();
//     this.setState({
//       clicked: true
//     })
//   }

//   onEdit = (e) => {
//     this.personal.current.edit();
//     this.education.current.edit();
//     this.practical.current.edit();
//     this.setState({
//       clicked: false
//     })
//   }

//   render() {
//     return (
//       <div className='box'>
//         <Header  title="Personal Information"/>
//         <Personal ref={this.personal}/>
//         <Header title="Education" />
//         <Education ref={this.education} />
//         <Header title="Practical Experience" />
//         <Practical ref={this.practical} />
//         <div className='footer'>
//           <div className='buttons'>
//           {this.state.clicked ?
//         <button onClick={this.onEdit} className='appButton'>Edit</button> :
//         <button onClick={this.onSubmit} className='appButton'>Submit</button>
//         }
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default App;
