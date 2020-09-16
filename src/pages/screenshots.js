import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import ContentHeader from '../components/ContentHeader'
import Grid from '../components/Grid'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`

const Screenshots = (props) => {
    return(
        <Wrapper>
            <ContentHeader title="Screenshots"/>
            <Grid />
        </Wrapper>
    )
}

export default Screenshots