import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ScreenshotModel from '../models/screenshot'
import UserModel from '../models/user'
import CommentModel from '../models/comment'

import BigPicture from '../components/BigPicture'
import CommentSection from '../components/CommentSection'
import InfoPanel from '../components/InfoPanel'
import ContentHeader from '../components/ContentHeader'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Columns = styled.div`
    display: flex;
`


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
            if (data.screenshot) {
                setScreenshot(data.screenshot)
                UserModel.show(data.screenshot.user).then(data => {
                    console.log(data)
                    setUser(data.user)
                })
                CommentModel.filter(data.screenshot.comments).then(data => {
                    console.log(data)
                    setComments(data.comments)
                })
            } else {
                props.history.push('/lost')
            }
        })
    }

    if (screenshot && user && comments) {
        return(
            <Wrapper>
                <ContentHeader title={screenshot.title} subtitle={user.username}/>
                <Columns>
                    <div>
                        <BigPicture image={screenshot.image}/>
                        <CommentSection comments={comments} contentType="screenshot" contentId={screenshot._id}/>
                    </div>
                    <InfoPanel info={screenshot.story} />
                </Columns>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Screenshot