import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'

const EditScreenshot = (props) => {
    const [screenshot, setScreenshot] = useState(null)
    const [parks, setParks] = useState(null)
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        console.log("here")
        fetchData()
    }, [])

    const fetchData = () => {
        ScreenshotModel.show(props.match.params.id).then(data => {
            console.log(data)
            //setScreenshot(data.screenshot)
            const loggedInUser = "5f62533c8510091624f74693"//temporarily hardcoded. should be the logged in user
            if (data.screenshot && loggedInUser === data.screenshot.user) {
                setScreenshot(data.screenshot)
                UserModel.show(data.screenshot.user).then(data => {
                    console.log(data)
                    setUser(data.user)
                    ParkModel.filter(data.user.parks).then(data => {
                        console.log(data)
                        setParks(data.parks)
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
        ScreenshotModel.update(screenshot._id, {
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
    
    if (parks && user && screenshot) {
        return(
            <form onSubmit={handleSubmit}>
                <p>Title:</p><input type="text" defaultValue={screenshot.title} name="title"/><br />
                <p>Image:</p><input type="text" defaultValue={screenshot.image} name="image"/><br />
                <p>Story:</p><input type="text" defaultValue={screenshot.story} name="story"/><br />
                {/* <p>Park:</p>
                    <select>
                        {parks.map((park, index) => {
                            return <option key={index} text={park.title} value={park._id}/>
                        })}
                    </select> */}
                <input type="submit" value="Update"/>
            </form>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default EditScreenshot