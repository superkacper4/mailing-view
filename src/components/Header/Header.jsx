import React from 'react'
import styled from 'styled-components'

import logoIMG from '../../assets/logo.png'

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    background-color: white;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
    padding-right: 30px;
`;



const Header = () => {
    return (
        <StyledHeader>
            <img src={logoIMG} alt="logo" />
        </StyledHeader>
    )
}

export default Header