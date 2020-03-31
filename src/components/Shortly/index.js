import React from 'react';
import styled from 'styled-components';

import Cards from '../Template/Card';

import bgShortenMobile from '../../assets/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../assets/bg-shorten-desktop.svg';


const Form = styled.form`
    background-color: var(--secondary-color);  
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${bgShortenMobile});
    padding: 1rem 2rem;
    margin: 2rem;
    border-radius: 8px;
    @media(min-width: 768px) {
        background-image: url(${bgShortenDesktop});
    }
`;

const ButtonShorten = styled.button`
    background: var(--primary-color);
    border-radius: 5px;
    color: #fff;
    margin-top: 0.5em;
    padding: 1rem;
    width: 100%;
    border: transparent;
    font-size: 18px;
    font-weight: 600;
`; 
const ResultShortly = styled.div `
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 30px;
    padding: 15px;
`;

const AboutContainer = styled.div ` 
    text-align: center;
    padding: 15px;
`;

export default function Shortly() {
    return (
        <>
        <Form>
            <input type="text" placeholder="Shorten a link here..." />
            <ButtonShorten type="submit">Shorten It!</ButtonShorten>            
        </Form>

        <ResultShortly>
            result1
        </ResultShortly>
            <ResultShortly>
                result2
        </ResultShortly>

        <AboutContainer>
                <h2> Advanced Statistics</h2>

                <p>Track how your links are performing across the web with our 
                    advanced statistics dashboard.</p>
                <Cards />

        </AboutContainer>
        </>
    )

}