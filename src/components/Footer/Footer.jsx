import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button';
import P from '../P/P';

import obj1IMG from '../../assets/object1.png'
import obj2IMG from '../../assets/object2.png'


const StyledFooter = styled.footer`
    position: relative;
    background-color: #64B3BC;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledDiv = styled.div`
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 80px;
    height: 80px;

`;

const StyledRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 10px 0;
`;

const StyledP = styled(P)`
    font-size: 12px;

`;

const StyledInputWraper = styled.form`
    position:absolute;
    top: 0;
    right: 100%;
    height: 100%;
    width: 100%;
    background-color: darkcyan;
    transform: ${({ isClicked }) => isClicked ? 'translateX(100%)' : 'translateX(0)'} ;
    transition: transform 1s;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
    background-color: transparent;
    border: white 1px solid;
    color: white;
    margin: 10px;
    padding: 5px;
`;

const Footer = () => {
    const [isClicked, setClicked] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();

        setClicked(true)
    }

    return (
        <StyledFooter>
            <P>Na czym polega wyjątkowość LAMA display?</P>
            <StyledRow>
                <StyledDiv>
                    <StyledImg src={obj1IMG} />
                    <StyledP>Rozkłada się automatycznie</StyledP>
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src={obj2IMG} />
                    <StyledP>Ustawianie trwa kilka sekund</StyledP>
                </StyledDiv>
                <StyledDiv>
                    <StyledImg src={obj1IMG} />
                    <StyledP>Jest efektywna kosztowo</StyledP>
                </StyledDiv>
            </StyledRow>
            <Button onClick={handleClick} >Dowiedz się więcej {">"}</Button>

            <StyledInputWraper isClicked={isClicked}>
                <StyledInput type="email" placeholder="imie@mail.pl" required />
                <StyledInput type="submit" />
            </StyledInputWraper>
        </StyledFooter>
    )
}

export default Footer