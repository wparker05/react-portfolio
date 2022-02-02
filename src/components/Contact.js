import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers'


export default function Contact() {
  const [form, setForm] = useState({});
  const {name, email, message} = form;
  const [error, setError] = useState('');

  const handleInputChange = (e) =>{
      const { name, value } = e.target;
      setForm((form) => ({...form, [name]:value}));


    if(!validateEmail(email)){
      setError("Please provide a valid email");
    }
    if(!name || !email || !message){
      setError("Name, email or message can not be blank");
    }

  }


  const handleFormSubmit = (e) =>{
    e.preventDefault();
    setForm({});
  }

  return (
    <div className= 'container'>
      <h2 className= 'title'>Contact</h2>
     <form className="form">
       <h3>Name:</h3>
        <input
          className="form-control"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <h3>Email address:</h3>
        <input
         className="form-control"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <h3>Message:</h3>
        <textarea
          className="form-control"
          value={message}
          name="message"
          onChange={handleInputChange}
          rows="5"
          cols="50"
          placeholder="Message"
        />
        <button className='btn btn-primary' type="button" onClick={handleFormSubmit} >
          Submit
        </button>
      </form>
      {error && <p className='error-text'>{error}</p>}
    </div>
  );
}