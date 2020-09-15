import React from 'react'
import Comment from './Comment'
import NewComment from './NewComment'

const CommentSection = (props) => {
    return(
        <div>
            <h2>Comments</h2>
            <ul>
                {props.comments.map((comment, index) => {
                    return <Comment key={index} comment={comment}/>
                })}
            </ul>
        </div>
    )
}

export default CommentSection

{/* <ul>
{elements.map((value, index) => {
  return <li key={index}>{value}</li>
})}
</ul> */}