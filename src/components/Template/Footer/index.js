import React from 'react';
import styled from 'styled-components';

import logoImg from '../../../assets/logo.svg';
import facebookImg from '../../../assets/icon-facebook.svg';
import instagramImg from '../../../assets/icon-instagram.svg';
import twitterImg from '../../../assets/icon-twitter.svg';
import pinterestImg from '../../../assets/icon-pinterest.svg';

import bgBoostMobile from '../../../assets/bg-boost-mobile.svg';
import bgBoostDesktop from '../../../assets/bg-boost-desktop.svg';


const FooterContainer = styled.footer`
    background-color: var(--dark);
    color: #fff;
    width: 100%;
    padding: 3rem 2rem;
    text-align: center;
    font-size: 16px;
    h2 {
        font-size: 16px;
        margin-top: 2rem;
        margin-bottom: .5rem;
        font-weight: 500;
    }
    ul {
        li {
            padding: .3rem 0;
            color: #999;
            font-weight: 400;
        }
    }
`;

const SocialNetwork = styled.div `
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Cta = styled.div `
    background-color: var(--secondary-color);
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${bgBoostMobile});
    color: #fff;
    text-align: center;
    padding: 3rem 1rem;
    font-size: 1.6rem;
    font-weight: 600;

    @media(min-width: 768px) {
        background-image: url(${bgBoostDesktop});
    }
`;



export default function Footer() {
    return (
        <>
        <Cta>
            <div>Boost your links today</div>
            <button className="button primary-button ">Get Started</button>
        </Cta>
        <FooterContainer>

            <div>
                <img src={logoImg} alt="Logo" />
            </div>
            
            <h2>Features</h2>
            <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            

            <h2>Resources</h2>
            <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
                        

            <h2>Company</h2>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>

            <SocialNetwork>
                <img src={facebookImg} alt="Facebook" />
                <img src={twitterImg} alt="Twitter" />
                <img src={pinterestImg} alt="Pinterest" />
                <img src={instagramImg} alt="Instagram" />
            </SocialNetwork>
            
        </FooterContainer>

        </>
    )
}
