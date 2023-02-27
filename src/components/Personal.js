import React, { useState, useEffect } from "react";
import '../styles/Personal.css'

const Personal = (props) => {
  const [submit, setSubmit] = useState(props.submit);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  useEffect(() => {
    if (submit !== props.clicked) {
      setSubmit(!submit)
    } else return

  }, [submit, props.clicked]);

  const firstChange = (e) => {
    setFirst(e.target.value)
  }

  const lastChange = (e) => {
    setLast(e.target.value)
  }

  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  const phoneChange = (e) => {
    setPhone(e.target.value)
  }

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
            <input value={first} onChange={firstChange} type="text"></input>
          }
          {submit ?
            <h1>{last}</h1> :
            <input value={last} onChange={lastChange} type="text"></input>
          }
          {submit ?
            <h1>{email}</h1> :
            <input value={email} onChange={emailChange} type="text"></input>
          }
          {submit ?
            <h1>{phone}</h1> :
            <input value={phone} onChange={phoneChange} type="text"></input>
          }
        </div>
      </form>
    </div>
  )
}

export default Personal