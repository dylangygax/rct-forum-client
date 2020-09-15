import React, {useState, useEffect} from 'react'

import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'
import CommentModel from '../models/comment'

import BigPicture from '../components/BigPicture'
import CommentSection from '../components/CommentSection'
import InfoPanel from '../components/InfoPanel'
import ContentHeader from '../components/ContentHeader'

const Screenshot = (props) => {
    const [screenshot, setScreenshot] = useState(null)
    const [user, setUser] = useState(null)
    const [comments, setComments] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ScreenshotModel.show(props.match.params.id).then(data => {
            console.log(data)
            setScreenshot(data.screenshot)
            UserModel.show(data.screenshot.user).then(data => {
                console.log(data)
                setUser(data.user)
            })
            CommentModel.filter(data.screenshot.comments).then(data => {
                console.log(data)
                setComments(data.comments)
            })
        })
    }

    if (screenshot && user && comments) {
        return(
            <div>
                <ContentHeader title={screenshot.title} author={user.username}/>
                <div>
                    <div>
                        <BigPicture image={screenshot.image}/>
                        <CommentSection comments={comments}/>
                    </div>
                    <InfoPanel info={screenshot.story} />
                </div>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Screenshot