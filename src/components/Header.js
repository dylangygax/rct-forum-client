import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 8vh;
`

const NavLink = styled.a`
    color: yellow;
`

const Header = (props) => {
    return(
        <Wrapper>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/parks">Parks</NavLink>
            <NavLink href="/screenshots">Screenshots</NavLink>
            <NavLink href="/about">About</NavLink>
        </Wrapper>
    )
}

export default Header