import React, {useState, useEffect} from 'react'
import ScreenshotModel from '../models/screenshot'
import BigPicture from '../components/BigPicture'
import CommentSection from '../components/CommentSection'
import InfoPanel from '../components/InfoPanel'
import UserModel from '../models/user'
import CommentModel from '../models/comment'

const Screenshot = (props) => {
    const [screenshot, setScreenshot] = useState(null)
    const [user, setUser] = useState(null)
    const [comments, setComments] = useState(null)
    let dataFetched = false
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
            CommentModel.all(data.screenshot.comment).then(data => {
                console.log(data)
                setComments(data.comments)
            })
        })
        dataFetched = true
    }

    if (screenshot && user && comments) {
        return(
            // <div>
            //     <h1>welcome to rct forum screenshot route</h1>
            //     <h1>{screenshot.title}</h1>
            //     <p>{screenshot.story}</p>
            //     <img src={screenshot.image} />
            // </div>
            <div>
                {/* <ContentHeader title={screenshot.title} author={user.username}/> */}
                <div>
                    <div>
                        <BigPicture title={screenshot.title} author={user.username} image={screenshot.image}/>
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