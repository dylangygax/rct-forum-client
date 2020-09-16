import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
    width: 40vw;
    text-align: left;
    margin: 10vh 5vw;
`

const InfoPanel = (props) => {
    return(
        <Wrapper>
            {props.info}
        </Wrapper>
    )
}

export default InfoPanel