import React from 'react';
import { Separate, CardBlockContainer, CardContainer, ImageContainer } from './styles';
import { Container, Row, Col } from 'react-grid-system';

import brandImg from '../../../assets/icon-brand-recognition.svg';
import detailedImg from '../../../assets/icon-detailed-records.svg';
import fullyImg from '../../../assets/icon-fully-customizable.svg';

export default function Card() {
    return (
        <>

        <CardBlockContainer>
            <Container>
            <Row>
                <Col sm={4} className="card-col">
                    <CardContainer>
                            <div className="card card-alignment">
                                <div className="card-header">
                                    <ImageContainer  className="icon-block">
                                        <img src={brandImg} alt="Brand Recognition" />
                                    </ImageContainer>
                                </div>
                                <div className="card-body">
                                    <h3>Brand Recognition</h3>
                                    <p>Boost your brand recognition with each click. Generic links don’t
                                    mean a thing. Branded links help instil confidence in your content.</p>
                                </div>
                                
                                
                            </div>

                        
                    </CardContainer>
                    <Separate />

                </Col>
                <Col sm={4} >
                    <CardContainer >
                            <div className="card card-alignment-1">
                                <ImageContainer className="icon-block-1">
                                    <img src={detailedImg} alt="Detailed Records" />
                                </ImageContainer>
                                <div className="card-body">
                                    <h3>Detailed Records</h3>
                                    <p>Gain insights into who is clicking your links. Knowing when and where
                                    people engage with your content helps inform better decisions.</p>
                                </div>

                            </div>
                            
                            

                    </CardContainer>
                    <Separate />

                </Col>
                <Col sm={4}>

                    <CardContainer >
                        <div className="card card-alignment-2">
                            <ImageContainer className="icon-block-2">
                                <img src={fullyImg} alt="Fully Customizable" />
                            </ImageContainer>
                            <div className="card-body">
                                <h3>Fully Customizable</h3>
                                <p>Improve brand awareness and content discoverability through customizable
                                links, supercharging audience engagement.</p>
                            </div>
                            
                        </div>

                    </CardContainer>

                </Col>
            </Row>
            </Container>
        </CardBlockContainer>
            
        </>
    )

}