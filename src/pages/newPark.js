import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'

import {UserContext} from '../UserContext'

const NewPark = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [screenshots, setScreenshots] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const user = loggedInUser//"5f62533c8510091624f74693"
        UserModel.show(user).then(data => {
            console.log(data)
            ScreenshotModel.filter(data.user.screenshots).then(data => {
                console.log(data)
                setScreenshots(data.screenshots)
            })
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        ParkModel.create({
            user: "5f62533c8510091624f74693",
            title: event.target.title.value,
            image: event.target.image.value,
            story: event.target.story.value,
            //park: event.target.park.value
        }).then(data => {
            console.log(data)
            const createdParkId = data.park._id
            props.history.push(`/parks/${createdParkId}`)
        })
    }
    
    if (screenshots) {
        return(
            <form onSubmit={handleSubmit}>
                <p>Title:</p><input type="text" defaultValue="" name="title"/><br />
                <p>Image:</p><input type="text" defaultValue="" name="image"/><br />
                <p>Story:</p><input type="text" defaultValue="" name="story"/><br />
                {/* <p>Park:</p>
                    <select>
                        {parks.map((park, index) => {
                            return <option key={index} text={park.title} value={park._id}/>
                        })}
                    </select> */}
                <input type="submit" value="Upload"/>
            </form>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default NewPark