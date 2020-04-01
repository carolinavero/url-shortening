import React from 'react';
import { Separate, CardContainer, ImageContainer } from './styles';
import { Container, Row, Col } from 'react-grid-system';

import brandImg from '../../../assets/icon-brand-recognition.svg';
import detailedImg from '../../../assets/icon-detailed-records.svg';
import fullyImg from '../../../assets/icon-fully-customizable.svg';

export default function Card() {
    return (
        <>

        <Container>
            <Row>
                <Col sm={4}>
                    <CardContainer>

                        <ImageContainer>
                            <img src={brandImg} alt="Brand Recognition" />
                        </ImageContainer>
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.</p>

                    </CardContainer>
                    <Separate />

                </Col>
                <Col sm={4}>
                    <CardContainer>
                        <ImageContainer>
                            <img src={detailedImg} alt="Detailed Records" />
                        </ImageContainer>
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.</p>

                    </CardContainer>
                    <Separate />

                </Col>
                <Col sm={4}>

                    <CardContainer>

                        <ImageContainer>
                            <img src={fullyImg} alt="Fully Customizable" />
                        </ImageContainer>

                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.</p>

                    </CardContainer>

                </Col>
            </Row>
        </Container>
            
        </>
    )

}