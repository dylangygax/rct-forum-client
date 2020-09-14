import React, {useState, useEffect} from 'react'
import UserModel from '../models/user'

const User = (props) => {
    //const [user, setUser] = useState(null)
    console.log(props.match.params.id)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        UserModel.show(props.match.params.id).then(data => {
            console.log(data)
            //setUser(data.user)
        })
    }



    return(
        <h1>welcome to rct forum user route</h1>

    )
}

export default User