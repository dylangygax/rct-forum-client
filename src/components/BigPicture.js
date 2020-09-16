import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 50vw;
border: 5px solid gray;
margin: 2vh 10vw;
background-color: yellow;
`

const Image = styled.img`
width: 50vw;
`

const BigPicture = (props) => {
    return(
        <Wrapper>
            <Image src={props.image} />
        </Wrapper>
    )
}

export default BigPicture