import React, { useState, createContext } from 'react'

const UserContext = createContext([{loggedInUser: 'KORN'}, () => {}])

const UserContextProvider = (props) => {
    //_id, email, username, isBand, bio, genre, location, instrument,
    //usersLiked, usersWhoLikeYou, matches
    const [loggedInUser, setUser] = useState(localStorage.getItem('uid'))

    return (
        <UserContext.Provider value={[loggedInUser, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}
//useState(localStorage.getItem('uid'))
export {UserContext, UserContextProvider}