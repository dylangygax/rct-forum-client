import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: gray;
`

const ContentHeader = (props) => {
    return(
        <Wrapper>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </Wrapper>
    )
}

export default ContentHeader