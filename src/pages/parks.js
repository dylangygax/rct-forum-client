import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'

import ContentHeader from '../components/ContentHeader'
import Grid from '../components/Grid'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column
`

const Parks = (props) => {
    const [parks, setParks] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ParkModel.all(props.match.params.id).then(data => {
            console.log(data)
            setParks(data.parks)
        })
    }

    if (parks) {
        return(
            <Wrapper>
                <ContentHeader title="Parks!"/>
                <Grid content={parks}/>
            </Wrapper>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default Parks