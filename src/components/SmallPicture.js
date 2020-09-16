import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;
    width: 14vw;
    margin: 2vh 1vw;
`
const Image = styled.img`
    width: 15vw;
    border: 5px solid darkgray;
`

const Title = styled.a`
    height: 3vh;
`

const SmallPicture = (props) => {
    const link = `/${props.contentType}/${props.id}`
    return(
        <Wrapper>
            <Title href={link}>{props.title}</Title>
            <a href={link}>
                <Image src={props.image}/>
            </a>
        </Wrapper>
    )
}

export default SmallPicture