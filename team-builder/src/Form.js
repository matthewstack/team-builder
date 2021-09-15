import './App.css';

import React from 'react'


export default function Form(props) {

    const { values, update, submit } = props

    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <div className="formCard">

       
        <form className="formCard" onSubmit={onSubmit}>
                <label>Username
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={onChange}
                        value={values.username}
                    />    
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        maxLength="40"
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Back End Developer">Back End Developer</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Director">Director</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>

        </form>
        </div>
    )


}