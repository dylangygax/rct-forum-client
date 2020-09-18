import React, {useContext} from 'react'
import protectedRoutes from '../config/protectedRoutes'
import Lost from './lost'
import {UserContext} from '../UserContext'

function Protected() {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    if (loggedInUser) {
        return (
            <div className="Protected">
                {protectedRoutes}
            </div>
        )
    } else {
        return(<Lost />)
    }
}
  
export default Protected