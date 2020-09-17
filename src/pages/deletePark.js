import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import ParkModel from '../models/park'

import SmallPicture from '../components/SmallPicture'

const DeletePark = (props) => {
    const [park, setPark] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        ParkModel.show(props.match.params.id).then(data => {
            console.log(data)
            setPark(data.park)
        })
    }

    const handleCancel = () => {
        props.history.push(`/myrct`)
    }

    const handleDelete = () => {
        ParkModel.delete(park._id)
        props.history.push(`/myrct`)
    }

    if (park) {
        return(
            <div>
                <h1>Are you sure you want to delete your beautiful park?</h1>
                <SmallPicture image={park.image} title={park.title} id={park._id} contentType={"park"}/>
                <p>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleDelete}>Delete</button>
                </p>
            </div>
        )
    } else {
        return(
            <p>..uh...loading..</p>
        )
    }
}

export default DeletePark