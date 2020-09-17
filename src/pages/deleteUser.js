import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import UserModel from '../models/user'

import SmallPicture from '../components/SmallPicture'

const DeleteUser = (props) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const loggedInUserId = "5f63d0971fb5ce4358dae858"//temporary hardcode
        UserModel.show(loggedInUserId).then(data => {
            console.log(data)
            setUser(data.user)
        })
    }

    const handleCancel = () => {
        props.history.push(`/myrct`)
    }

    const handleDelete = () => {
        UserModel.delete(user._id).then(data => {
            console.log(data)
            props.history.push(`/`)
        })        
    }

    if (user) {
        return(
            <div>
                <h1>Are you sure you leave our little island? We'll miss you're beautiful creations</h1>
                <h2>Careful, this cannot be undone. All of your content will be deleted from the site</h2>
                <p>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleDelete}>Delete Account</button>
                </p>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default DeleteUser