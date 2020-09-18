import React, {useContext, useState, useEffect} from 'react'

import UserModel from '../models/user'

import {UserContext} from '../UserContext'

const Welcome = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log(loggedInUser)
        fetchData()
    }, [])

    const fetchData = () => {
        const loggedInUserId = loggedInUser
        UserModel.show(loggedInUserId).then(data => {
            console.log(data)
            setUser(data.user)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("in handle submit")
        UserModel.update(user._id, {
            bio: event.target.bio.value
        }).then(data => {
            console.log(data)
            setUser(data.user)
            props.history.push('/')
        })
    }

    if (user) {
        return(
            <div>
                <h1>Welcome to the site, {user.username}!</h1>
                <h2>Please tell us a little bit more about yourself... (last step, don't worry)</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="bio" placeholder="type a short bio here..."/>
                    <input type="submit" value="Add Bio"/>
                </form>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Welcome