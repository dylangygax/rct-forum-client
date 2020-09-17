import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import UserModel from '../models/user'
import ParkModel from '../models/park'
import ScreenshotModel from '../models/screenshot'

import Grid from '../components/Grid'
import ContentHeader from '../components/ContentHeader'
import InfoPanel from '../components/InfoPanel'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`

const Columns = styled.div`
    display: flex;
`

const Profile = (props) => {
    const [user, setUser] = useState(null)
    const [parks, setParks] = useState(null)
    const [screenshots, setScreenshots] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const userId = "5f62533c8510091624f74693"
        UserModel.show(userId).then(data => {
            console.log(data)
            if (data.user) {
                setUser(data.user)
                ParkModel.filter(data.user.parks).then(data => {
                    console.log(data)
                    setParks(data.parks)
                })
                ScreenshotModel.filter(data.user.screenshots).then(data => {
                    console.log(data)
                    setScreenshots(data.screenshots)
                })
            } else {
                props.history.push('/lost')
            }
        })
    }


    if (user && parks && screenshots) {
        return(
            <Wrapper>
                <ContentHeader title={user.username}/>
                <Columns>
                    <div>
                        <h2>Your parks:</h2>
                        <Grid content={parks} contentType="parks"/>
                        <h2>Your screenshots:</h2>
                        <Grid content={screenshots} contentType="screenshots"/>
                    </div>
                    <InfoPanel info={user.bio} />
                </Columns>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Profile