import React, {useContext} from 'react'
import styled from 'styled-components'

import {UserContext} from '../UserContext'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 8vh;
`

const NavLink = styled.a`
    color: yellow;
`

const Header = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    if (loggedInUser) {
        return(
        <Wrapper>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/parks">Parks</NavLink>
            <NavLink href="/screenshots">Screenshots</NavLink>
            <NavLink href="/about">About</NavLink>
            <p>  </p>
            <NavLink href="/myrct/newscreenshot">Add Screenshot</NavLink>
            <NavLink href="/myrct/newpark">Add Park</NavLink>
            <NavLink href="/myrct/profile">Profile</NavLink>
            <NavLink href="/myrct">Settings</NavLink>
        </Wrapper>
        )
    } else {
        return(
            <Wrapper>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/parks">Parks</NavLink>
                <NavLink href="/screenshots">Screenshots</NavLink>
                <NavLink href="/about">About</NavLink>
                <p>  </p>
                <NavLink href="/login">Log In</NavLink>
                <NavLink href="/register">Sign Up</NavLink>
            </Wrapper>
        )
    }
}

export default Header