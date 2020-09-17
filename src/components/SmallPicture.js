import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 14vw;
    margin: 2vh 1vw;
`
const Image = styled.div`
    width: 15vw;
    height: 10vw;
    border: 5px solid darkgray;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
//Consider: user metadata of image to find width and height

const Title = styled.a`
    height: 5vh;
    color: yellow;
`

const SmallPicture = (props) => {
    const link = `/${props.contentType}/${props.id}`
    return(
        <Wrapper>
            <Title href={link}>{props.title}</Title>
            <a href={link}>
                <Image style={{backgroundImage: "url("+props.image+")"}}/>
            </a>
        </Wrapper>
    )
}

export default SmallPicture