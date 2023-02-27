import React, { useEffect, useState } from "react";

const Practical = (props) => {
  const [submit, setSubmit] = useState(false)
  const [added, setAdded] = useState(false)
  const [company, setCompany] = useState('')
  const [title, setTitle] = useState('')
  const [responsibilities, setResponsibilities] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    if(submit !== props.clicked) {
      setSubmit(!submit)
    } return
  }, [submit, props.clicked]);

  const removePracticalForm = () => {
    setAdded(false)
    setCompany('')
    setTitle('')
    setResponsibilities('')
    setStart('')
    setEnd('')
  };

  const addPracticalForm = () => { setAdded(true) };

  const companyChange = (e) => { setCompany(e.target.value) };
  const titleChange = (e) => { setTitle(e.target.value) };
  const responsibilitiesChange = (e) => { setResponsibilities(e.target.value) };
  const startChange = (e) => { setStart(e.target.value) };
  const endChange = (e) => { setEnd(e.target.value) };

  return (
    <div>
      <div className="educationDiv">
      {added ?
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
              <input value={company} onChange={companyChange} type="text"></input>
            }
            {submit ?
              <h1>{title}</h1> :
              <input onChange={titleChange} type="text"></input>
            }
            {submit ?
              <h1>{responsibilities}</h1> :
              <textarea value={responsibilities} onChange={responsibilitiesChange} className="practTextArea"></textarea>
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
          {submit ?
            null :
            <button onClick={removePracticalForm}>Delete</button>
          }
        </div>
      </div> :
      null
      }
      {submit || added ?
        null :
        <button onClick={addPracticalForm} className="addEducation">Add</button>
      }
    </div>
    </div>
  )
}

export default Practical