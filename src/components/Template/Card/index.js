import React from 'react';
import styled from 'styled-components';

import brandImg from '../../../assets/icon-brand-recognition.svg';
import detailedImg from '../../../assets/icon-detailed-records.svg';
import fullyImg from '../../../assets/icon-fully-customizable.svg';

const CardContainer = styled.div ` 
    text-align: center;
    padding: 2rem;
    background-color: #fff;
    border-radius: 5px;
    position: relative;

`;
const ImageContainer = styled.div `
    background-color: var(--secondary-color);
    border-radius: 50px;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Separate = styled.div `
    background-color: var(--primary-color);
    width: 10px;
    height: 100px;
    text-align: center;
    margin: 0 auto;
`;

export default function Card() {
    return (
        <>
            <CardContainer>

                <ImageContainer>
                    <img src={brandImg} alt="Brand Recognition"/>
                </ImageContainer>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>

            </CardContainer>
            <Separate />

            <CardContainer>
                <ImageContainer>
                    <img src={detailedImg} alt="Detailed Records" />
                </ImageContainer>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>

            </CardContainer>
            <Separate />

            <CardContainer>

                <ImageContainer>
                    <img src={fullyImg} alt="Fully Customizable" />
                </ImageContainer>
                
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>

            </CardContainer>
        </>
    )

}