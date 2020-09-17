import React, { useState, useEffect } from 'react'
import UserModel from '../models/user'
import Comment from './Comment'
import NewComment from './NewComment'
import styled from 'styled-components'

import CommentModel from '../models/comment'

const Wrapper = styled.div`
    width: 50vw;
    border: 5px solid gray;
    margin: 2vh 10vw;
    padding: 20px;
    text-align: left;
`

const CommentSection = (props) => {
    const [comments, setComments] = useState(null)
    const [newComment, setNewComment] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [newComment])

    const fetchData = async () => {
        console.log(props.comments)
        //for each comment in comments, get user's username from DB and append it to the comment object as username
        const commentsWithUsernames = await Promise.all(props.comments.map(async comment => {
            const user = await UserModel.show(comment.user)
            console.log(user)
            console.log(user.user.username)
            console.log(comment)
            // comment = {...comment, username: user.user.username}
            // console.log(comment)
            const newComment = await {body: comment.body, user: comment.user, username: user.user.username}
            return newComment
        }))
        console.log(commentsWithUsernames)
        setComments(commentsWithUsernames)
    }
    
    const createComment = async (event) => {
        event.preventDefault()
        console.log("in createComment")
        console.log(event.target.comment.value)
        const newComment = {
            user: "5f62533c8510091624f74693",//temporarily hardcoded
            body: event.target.comment.value,
        }
        if (props.contentType === "screenshot") {
            newComment["screenshot"] = props.contentId
        }
        console.log(newComment)
        const createdComment = await CommentModel.create(newComment)
        const foundUser = await UserModel.show(createComment.user)
        //console.log({body: createdComment.body, user: createdComment.user, username: foundUser.username})
        //setComments([...comments, {body: newComment.body, user: newComment.user, username: newComment.username}])
        setNewComment(newComment)
        //fetchData()
    }

    if (comments) {
        return(
            <Wrapper>
                <h2>Comments:</h2>
                <ul>
                    {comments.map((comment, index) => {
                        return <Comment key={index} comment={comment} user={comment.username}/>
                    })}
                    <NewComment contentType={props.contentType} contentId={props.contentId} createComment={createComment}/>
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