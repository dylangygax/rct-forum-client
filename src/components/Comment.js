import React from 'react'

const Comment = (props) => {
    return(
        <div>
            <h6>{props.user}:</h6>
            <p>{props.comment.body}</p>
        </div>
    )
}

export default Comment