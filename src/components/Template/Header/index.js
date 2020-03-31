import React from 'react'
import styled from 'styled-components';

import mainImg from '../../../assets/illustration-working.svg';

const MainContainer = styled.div `
    background-color: #fff;
    padding: 30px;
    text-align: center;
`;


function Header() {
    return (

        <MainContainer>
            <img src={mainImg} alt="Main" className="img-main" />

            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights
                 on how your links are performing.
            </p>

            <button className="button primary-button ">Get Started</button>

        </MainContainer>

    );
}

export default Header;