//USER DASHBOARD
//edit: username, bio. lists of screenshots, park. for each screenshot/park list title and edit button (a tag).

import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'

const EditUser = (props) => {
    const [user, setUser] = useState(null)
    const [parks, setParks] = useState(null)
    const [screenshots, setScreenshots] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const loggedInUserId = "5f62533c8510091624f74693"
        UserModel.show(loggedInUserId).then(data => {
            console.log(data)
            setUser(data.user)
            ParkModel.filter(data.user.parks).then(data => {
                console.log(data)
                setParks(data.parks)
            })
            ScreenshotModel.filter(data.user.screenshots).then(data => {
                console.log(data)
                setScreenshots(data.screenshots)
            })
        })
    }

    const handleSubmit = () => {
        console.log("in handle submit")
    }

    if (user && parks && screenshots) {
        return(
            <div>
                <h1>Settings</h1>
                <form onSubmit={handleSubmit}>
                    <p>Username:</p><input type="text" defaultValue={user.username} name="username"/><br />
                    <p>Bio:</p><input type="text" defaultValue={user.bio} name="bio"/><br />
                    <input type="submit" value="Update"/>
                </form>
                <h3>Your Parks</h3>
                {parks.map((park, index) => {
                        const editLink = `/myrct/parks/${park._id}/edit`
                        return <div key={index}>
                            <p>{park.title}: <a href={editLink}>Edit</a></p>
                        </div>
                })}
                <h3>Your Screenshots</h3>
                {screenshots.map((screenshot, index) => {
                        const editLink = `/myrct/screenshots/${screenshot._id}/edit`
                        return <div key={index}>
                            <p>{screenshot.title}: <a href={editLink}>Edit</a></p>                            
                        </div>
                })}
            </div>
        )
    } else {
        return(<h3>BTOTOM TEXT</h3>)
    }
}

export default EditUser