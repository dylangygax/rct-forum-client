import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'

import ContentHeader from '../components/ContentHeader'
import Grid from '../components/Grid'
import InfoPanel from '../components/InfoPanel'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`

const Columns = styled.div`
    display: flex;
`

const Home = (props) => {
    const [parks, setParks] = useState(null)
    const [screenshots, setScreenshots] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ParkModel.all().then(data => {
            console.log(data)
            setParks(data.parks)
        })
        ScreenshotModel.all().then(data => {
            console.log(data)
            setScreenshots(data.screenshots)
        })
    }


    if (parks && screenshots) {
        return(
            <Wrapper>
                <ContentHeader title="RCT Island"/>
                <Columns>
                    <div>
                        <h2>New Parks:</h2>
                        <Grid content={parks}/>
                        <h2>New Screenshots:</h2>
                        <Grid content={screenshots}/>
                    </div>
                    <InfoPanel info="Welcome to RCT Island, your oasis for quality Rollercoaster Tycoon Content!" />
                </Columns>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Home