import React from 'react'
import { MainContainer } from './styles';
import { Container, Row, Col } from 'react-grid-system';

import mainImg from '../../../assets/illustration-working.svg';

function Header() {
    return (

        <>
        <MainContainer>
            <Container>
                <Row className="main-content-block">
                    <Col md={6} className="main-content">
                        <h1>More than just shorter links</h1>
                        <p>Build your brand’s recognition and get detailed insights
                            on how your links are performing.</p>

                        <button className="button primary-button ">Get Started</button>
                    </Col>
                    <Col md={6} className="main-image"><img src={mainImg} alt="Main" className="img-main" /></Col>
                </Row>
            </Container>
        </MainContainer>

        </>

    );
}

export default Header;