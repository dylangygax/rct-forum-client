import React from 'react'
import styled from 'styled-components'

import SmallPicture from './SmallPicture'

const Grid = (props) => {
    console.log(props.content)
    
    const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 50vw;
        border: 5px solid gray;
        margin: 2vh 10vw;
    `

    return(
        <Wrapper>
            {props.content.map((item, index) => {
                return <SmallPicture key={index} image={item.image} title={item.title} id={item._id}/>
            })}
        </Wrapper>
    )
}

export default Grid