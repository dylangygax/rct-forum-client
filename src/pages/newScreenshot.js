import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'

import {UserContext} from '../UserContext'

const NewScreenshot = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [parks, setParks] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const user = loggedInUser//"5f62533c8510091624f74693"
        UserModel.show(user).then(data => {
            console.log(data)
            ParkModel.filter(data.user.parks).then(data => {
                console.log(data)
                setParks(data.parks)
            })
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        ScreenshotModel.create({
            user: "5f62533c8510091624f74693",
            title: event.target.title.value,
            image: event.target.image.value,
            story: event.target.story.value,
            //park: event.target.park.value
        }).then(data => {
            console.log(data)
            const createdScreenshotId = data.screenshot._id
            props.history.push(`/screenshots/${createdScreenshotId}`)
        })
    }
    
    if (parks) {
        return(
            <form onSubmit={handleSubmit}>
                <p>Title:</p><input type="text" defaultValue="" name="title"/><br />
                <p>Image:</p><input type="text" defaultValue="" name="image"/><br />
                <p>Story:</p><input type="text" defaultValue="" name="story"/><br />
                <p>Park:</p>
                    <select>
                        {parks.map((park, index) => {
                            return <option key={index} value={park._id}>{park.title}</option>
                        })}
                    </select>
                <input type="submit" value="Upload"/>
            </form>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default NewScreenshot