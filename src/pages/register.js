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
                UserModel.login({username, password})
                .then(data => {
                    if (!data._id) {
                        //setErrorDisplayText('Invalid Login/Password')
                        return false
                    }
                    console.log(data)
                    setUser(data._id)
                    console.log(localStorage.getItem('uid'))
                    localStorage.setItem('uid', data._id)
                    console.log(localStorage.getItem('uid'))
                    //REDIRECT
                    props.history.push("/myrct/welcome")
                })
                .catch(err => {
                    //setErrorDisplayText('Invalid Login/Password')
                    console.log(err)
                })
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
            <input type="password" name="password" value={password} onChange={handlePassword}/>
            <input type="submit" value="Register"/>
        </form>
    )
}

export default Register