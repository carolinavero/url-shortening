import styled from 'styled-components';

import bgBoostMobile from '../../../assets/bg-boost-mobile.svg';
import bgBoostDesktop from '../../../assets/bg-boost-desktop.svg';

export const FooterContainer = styled.footer`
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
        }
        
        a {
            color: #999;
            font-weight: 400;
            text-decoration: none;

            &:hover {
                color: var(--primary-color);
            }
        }


    }

    @media(min-width: 768px) {
        text-align: left;
    }
`;

export const SocialNetwork = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a:hover {
        color: var(--primary-color);
    }
`;

export const Cta = styled.div`
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
