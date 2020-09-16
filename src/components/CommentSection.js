import React, { useState, useEffect } from 'react'
import UserModel from '../models/user'
import Comment from './Comment'
import NewComment from './NewComment'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 50vw;
    border: 5px solid gray;
    margin: 2vh 10vw;
    padding: 20px;
    text-align: left;
`

const CommentSection = (props) => {
    const [comments, setComments] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        console.log(props.comments)
        //for each comment in comments, get user's username from DB and append it to the comment object as username
        const commentsWithUsernames = await Promise.all(props.comments.map(async comment => {
            const user = await UserModel.show(comment.user)
            console.log(user)
            console.log(comment)
            comment = await {...comment, username: user.username}
            console.log(comment)
            const newComment = await {body: comment.body, user: comment.user, username: user.username}
            return newComment
        }))
        console.log(commentsWithUsernames)
        setComments(commentsWithUsernames)
    }
    
    if (comments) {
        return(
            <Wrapper>
                <h2>Comments:</h2>
                <ul>
                    {comments.map((comment, index) => {
                        return <Comment key={index} comment={comment} user={comment.user}/>
                    })}
                    <NewComment />
                </ul>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading comments..</p>
        )
    }
}

export default CommentSection

{/* <ul>
{elements.map((value, index) => {
  return <li key={index}>{value}</li>
})}
</ul> */}