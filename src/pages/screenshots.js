import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ScreenshotModel from '../models/screenshot'

import ContentHeader from '../components/ContentHeader'
import Grid from '../components/Grid'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`

const Screenshots = (props) => {
    const [screenshots, setScreenshots] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ScreenshotModel.all(props.match.params.id).then(data => {
            console.log(data)
            setScreenshots(data.screenshots)
        })
    }

    if (screenshots) {
        return(
            <Wrapper>
                <ContentHeader title="Screenshots"/>
                <Grid content={screenshots} contentType="screenshots"/>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Screenshots