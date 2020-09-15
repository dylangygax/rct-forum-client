import React, {useState, useEffect} from 'react'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'
import CommentModel from '../models/comment'

import BigPicture from '../components/BigPicture'
import CommentSection from '../components/CommentSection'
import InfoPanel from '../components/InfoPanel'
import ContentHeader from '../components/ContentHeader'

const Park = (props) => {
    const [park, setPark] = useState(null)
    const [user, setUser] = useState(null)
    const [screenshots, setScreenshots] = useState(null)
    const [comments, setComments] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ParkModel.show(props.match.params.id).then(data => {
            console.log(data)
            setPark(data.park)
            UserModel.show(data.park.user).then(data => {
                console.log(data)
                setUser(data.user)
            })
            CommentModel.filter(data.park.comments).then(data => {
                console.log(data)
                setComments(data.comments)
            })
        })
    }

    if (park && user && comments) {
        return(
            <div>
                <ContentHeader title={park.parkName} author={user.username}/>
                <div>
                    <div>
                        <BigPicture image={park.overviewPic}/>
                        <CommentSection comments={comments}/>
                    </div>
                    <InfoPanel info={park.story} />
                </div>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Park