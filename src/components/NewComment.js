import React from 'react'
import styled from 'styled-components'
import CommentModel from '../models/comment'

// const Form = styled.form`
//     background-color: red
// `

const NewComment = (props) => {
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.comment.value)
    //     const newComment = {
    //         user: "5f62533c8510091624f74693",//temporarily hardcoded
    //         body: event.target.comment.value
    //     }
    //     console.log(props.contentId)
    //     console.log(props.contentType)
    //     if (props.contentType === "screenshot") {
    //         newComment["screenshot"] = props.contentId
    //     } 
    //     if (props.contentType === "park") {
    //         newComment["park"] = props.contentId
    //     }
    //     //newComment[props.contentType] = props.contentId
    //     console.log(newComment)
    //     CommentModel.create(newComment)
    // }
    
    return(
        <div>
            <h6>Leave a comment: </h6>
            <form onSubmit={props.createComment}>
                <input type="text" defaultValue="" name="comment"/>
                <input type="submit" value="Comment"/>
            </form>
        </div>
    )
}

export default NewComment