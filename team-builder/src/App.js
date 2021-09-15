import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {

    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  }


  return (
    <div className="App">
      <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
        />
        {teamMembers.map(teamMember => {
          return(
            <div>
              <h2>{teamMember.username}</h2>
              <p>Email: {teamMember.email}</p>
              <p>Role: {teamMember.role}</p>
            </div>
          )
        })
        }
    </div>
  );
}

export default App;
