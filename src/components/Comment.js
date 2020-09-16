import React from 'react'

const Comment = (props) => {
    const link = `/users/${props.user}`

    return(
        <div>
            <a href={link}>{props.user}:</a>
            <p>{props.comment.body}</p>
        </div>
    )
}

export default Comment