import React, { useContext, useState } from 'react'
import UserModel from '../models/user'
import { UserContext } from '../UserContext'

const Login = (props) => {

    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [errorDisplayText, setErrorDisplayText] = useState('error text displays here')

    const [loggedInUser, setUser] = useContext(UserContext)

    const handleUsername = (event) => {
        setInputUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setInputPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userToLog = {
            username: inputUsername,
            password: inputPassword,
        }
        setInputUsername('')
        setInputPassword('')
        UserModel.login(userToLog)
            .then(data => {
                if (!data._id) {
                    setErrorDisplayText('Invalid Login/Password')
                    return false
                }
                console.log(data)
                setUser(data._id)
                console.log(localStorage.getItem('uid'))
                localStorage.setItem('uid', data._id)
                console.log(localStorage.getItem('uid'))
                //REDIRECT
                props.history.push('/')
            })
            .catch(err => {
                setErrorDisplayText('Invalid Login/Password')
                console.log(err)
            })
    }

    return(
        <div>
            <h1>Welcome back! Login here</h1>
            <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input type="text" name="username" value={inputUsername} onChange={handleUsername}/>
            <p>Password</p>
            <input type="password" name="password" value={inputPassword} onChange={handlePassword}/>
            <input type="submit" value="Register"/>
            </form>
        </div>
    )
}

export default Login