import React, {useEffect, useState, useContext} from 'react'
import styled from 'styled-components'
import {UserContext} from '../UserContext'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'

const EditPark = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [park, setPark] = useState(null)
    const [screenshots, setScreenshots] = useState(null)
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        console.log("here")
        fetchData()
    }, [])

    const fetchData = () => {
        ParkModel.show(props.match.params.id).then(data => {
            console.log(data)
            //setScreenshot(data.screenshot)
            //const loggedInUser = "5f62533c8510091624f74693"//temporarily hardcoded. should be the logged in user
            if (data.park && loggedInUser === data.park.user) {
                setPark(data.park)
                UserModel.show(data.park.user).then(data => {
                    console.log(data)
                    setUser(data.user)
                    ScreenshotModel.filter(data.user.screenshots).then(data => {
                        console.log(data)
                        setScreenshots(data.screenshots)
                    })
                })
            } else {
                props.history.push('/lost')
            }
        })
    }
    // const fetchData = () => {
    //     const user = "5f62533c8510091624f74693"
    //     UserModel.show(user).then(data => {
    //         console.log(data)

    //     })
    // }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        ParkModel.update(park._id, {
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
    
    if (park && user && screenshots) {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Title:</p><input type="text" defaultValue={park.title} name="title"/><br />
                    <p>Image:</p><input type="text" defaultValue={park.image} name="image"/><br />
                    <p>Story:</p><input type="text" defaultValue={park.story} name="story"/><br />
                    {/* <p>Park:</p>
                        <select>
                            {parks.map((park, index) => {
                                return <option key={index} text={park.title} value={park._id}/>
                            })}
                        </select> */}
                    <input type="submit" value="Update"/>
                </form>
                <a href={`/myrct/parks/${park._id}/delete`}>Delete Park</a>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default EditPark