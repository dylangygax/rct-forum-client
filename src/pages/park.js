import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'
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
            if (data.park) {
                setPark(data.park)
                UserModel.show(data.park.user).then(data => {
                    console.log(data)
                    setUser(data.user)
                })
                CommentModel.filter(data.park.comments).then(data => {
                    console.log(data)
                    setComments(data.comments)
                })
            } else {
                props.history.push('/lost')
            }
        })
    }

    if (park && user && comments) {
        return(
            <Wrapper>
                <ContentHeader title={park.title} subtitle={user.username}/>
                <Columns>
                    <div>
                        <BigPicture image={park.image}/>
                        <CommentSection comments={comments}/>
                    </div>
                    <InfoPanel info={park.story} />
                </Columns>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Park