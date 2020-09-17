import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import ScreenshotModel from '../models/screenshot'

import SmallPicture from '../components/SmallPicture'

const DeleteScreenshot = (props) => {
    const [screenshot, setScreenshot] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ScreenshotModel.show(props.match.params.id).then(data => {
            console.log(data)
            setScreenshot(data.screenshot)
        })
    }

    const handleCancel = () => {
        props.history.push(`/myrct`)
    }

    const handleDelete = () => {
        ScreenshotModel.delete(screenshot._id)
        props.history.push(`/myrct`)
    }

    if (screenshot) {
        return(
            <div>
                <h1>Are you sure you want to delete your beautiful screenshot?</h1>
                <SmallPicture image={screenshot.image} title={screenshot.title} id={screenshot._id} contentType={"screenshot"}/>
                <p>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                </p>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default DeleteScreenshot