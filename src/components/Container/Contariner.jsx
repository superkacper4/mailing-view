import React from 'react'
import styled from 'styled-components'
import P from '../P/P';

import animationIMG from '../../assets/animacja.png'
import arrowIMG from '../../assets/strzalka.png'

const StyledContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    width: 100%;
    min-height: 70vh;
    background-color: #77CCD0;
    padding-top: 80px;
`;

const StyledH1 = styled.h1`
    color: white;
    font-size: 30px;
    padding: 5px;
    margin: 0;
    text-align: center;
`;

const StyledImg = styled.img`
    height: auto;
    width: 100%;
    max-height: 389px;
    max-width: 244px;
    justify-self: start;
    align-self: center;
    grid-column-start: 2; 
    grid-row-start: 1; 
    grid-row-end: 3; 
`;

const StyledArrow = styled.img`
    height: auto;
    width: 100%;
    max-height: 126px;
    max-width: 256px;
    justify-self: end;
    align-self: start;
`;

const StyledDiv = styled.div`
    justify-self: end;
    align-self: end;  
    padding: 0 10px 10px 0;
`;

const Contariner = () => {
    return (
        <StyledContainer>
            <StyledDiv>
                <StyledH1>
                    Nowość
                </StyledH1>
                <P>
                    W naszym portfolio
            </P>
                <P>
                    LAMA display
            </P>
            </StyledDiv>
            <StyledImg src={animationIMG} />
            <StyledArrow src={arrowIMG} />
        </StyledContainer>
    )
}

export default Contariner