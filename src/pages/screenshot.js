import React, {useState, useEffect} from 'react'
import ScreenshotModel from '../models/screenshot'

const Screenshot = (props) => {
    const [screenshot, setScreenshot] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ScreenshotModel.show(props.match.params.id).then(data => {
            console.log(data)
            setScreenshot(data.screenshot)
        })
    }

    if (screenshot) {
        return(
            <div>
                <h1>welcome to rct forum screenshot route</h1>
                <h1>{screenshot.title}</h1>
                <p>{screenshot.story}</p>
                <img src={screenshot.image} />
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }


}

export default Screenshot