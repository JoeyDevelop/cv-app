import React, { useEffect, useState } from "react";
import '../styles/Education.css'

const Education = (props) => {
  const [submit, setSubmit] = useState(false)
  const [added, setAdded] = useState(false)
  const [school, setSchool] = useState('')
  const [study, setStudy] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    if (submit !== props.clicked) {
      setSubmit(!submit)
    } return
  }, [submit, props.clicked]);

  const removeEducationForm = () => {
    setAdded(false)
    setSchool('')
    setStudy('')
    setStart('')
    setEnd('')
  };

  const addEducationForm = () => { setAdded(true) };

  const schoolChange = (e) => { setSchool(e.target.value) };

  const studyChange = (e) => { setStudy(e.target.value) };

  const startChange = (e) => { setStart(e.target.value) };

  const endChange = (e) => { setEnd(e.target.value) };

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
                <input value={school} onChange={schoolChange} type="text"></input>
              }
              {submit ?
                <h1>{study}</h1> :
                <input value={study} onChange={studyChange} type="text"></input>
              }
              {submit ?
                <h1>{start}</h1> :
                <input value={start} onChange={startChange} type="date"></input>
              }
              {submit ?
                <h1>{end}</h1> :
                <input value={end} onChange={endChange} type="date"></input>
              }
            </div>
          </form>
          <div className="eduFormButtons">

            {/* Remove Form */}
            {submit ?
              null :
              <button onClick={removeEducationForm}>Delete</button>
            }
          </div>
        </div> :
        null
      }

      {/* Hide button on submit */}
      {submit || added ?
      null :
      <button onClick={addEducationForm} className="addEducation">Add</button>
      }
    </div>
  )
}

export default Education