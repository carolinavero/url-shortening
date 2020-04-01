import React from 'react';
import { FooterContainer, SocialNetwork, Cta } from './styles';
import { Container, Row, Col } from 'react-grid-system';

import logoImg from '../../../assets/logo.svg';
import facebookImg from '../../../assets/icon-facebook.svg';
import instagramImg from '../../../assets/icon-instagram.svg';
import twitterImg from '../../../assets/icon-twitter.svg';
import pinterestImg from '../../../assets/icon-pinterest.svg';

export default function Footer() {
    return (
        <>
       
        <Cta>
            <div>Boost your links today</div>
            <button className="button primary-button ">Get Started</button>
        </Cta>

        <FooterContainer>

            <Container>
                <Row>
                    <Col md={3}>
                        <div>
                            <img src={logoImg} alt="Logo" />
                        </div>

                    </Col>
                    <Col md={2}>
                            <h2>Features</h2>
                            <ul>
                                <li><a href="/#">Link Shortening</a></li>
                                <li><a href="/#">Branded Links</a></li>
                                <li><a href="/#">Analytics</a></li>
                            </ul>
                    </Col>
                    <Col md={2}>
                            <h2>Resources</h2>
                            <ul>
                                <li><a href="/#">Blog</a></li>
                                <li><a href="/#">Developers</a></li>
                                <li><a href="/#">Support</a></li>
                            </ul>
                    </Col>
                    <Col md={2}>
                            <h2>Company</h2>
                            <ul>
                                <li><a href="/#">About</a></li>
                                <li><a href="/#">Our Team</a></li>
                                <li><a href="/#">Careers</a></li>
                                <li><a href="/#">Contact</a></li>
                            </ul>
                    </Col>
                    <Col md={3}>
                            <SocialNetwork>
                                <a href="/#"><img src={facebookImg} alt="Facebook" /></a>
                                <a href="/#"><img src={twitterImg} alt="Twitter" /></a>
                                <a href="/#"><img src={pinterestImg} alt="Pinterest" /></a>
                                <a href="/#"><img src={instagramImg} alt="Instagram" /></a>
                            </SocialNetwork>

                    </Col>
                </Row>


            </Container>

        </FooterContainer>

        </>
    )
}
