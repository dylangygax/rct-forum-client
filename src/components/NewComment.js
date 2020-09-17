import React from 'react'
import styled from 'styled-components'

// const Form = styled.form`
//     background-color: red
// `

const NewComment = (props) => {
    return(
        <div>
            <h6>Leave a comment: </h6>
            <form>
                <input type="text" defaultValue="bottom text" name="comment"/>
                <input type="submit" value="Comment"/>
            </form>
        </div>
    )
}

export default NewComment