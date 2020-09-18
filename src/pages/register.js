import React, { Component, useState, useEffect, useContext } from 'react';
import UserModel from '../models/user'

import {UserContext} from '../UserContext'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loggedInUser, setUser] = useContext(UserContext)

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submit')
        UserModel.create({username, password})
            .then(data => {
                console.log(data)
            })
        //NEED TO LOG THE USER IN

        //REDIRECT?
        //this.props.history.push('/')
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="text" name="username" value={username} onChange={handleUsername}/>
            <p>Password</p>
            <input type="text" name="password" value={password} onChange={handlePassword}/>
            <input type="submit" value="Register"/>
        </form>
    )
}

export default Register