import React from 'react'

const ContentHeader = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
        </div>
    )
}

export default ContentHeader