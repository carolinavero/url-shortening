import styled from 'styled-components';

import bgShortenMobile from '../../assets/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../assets/bg-shorten-desktop.svg';

export const Form = styled.form`
    background-color: var(--secondary-color);  
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${bgShortenMobile});
    padding: 1.5rem;
    
    border-radius: 8px;
    @media(min-width: 768px) {
        background-image: url(${bgShortenDesktop});
        padding: 2.5rem;
    }
  
`;


export const ButtonShorten = styled.button`
    background: var(--primary-color);
    border-radius: 5px;
    color: #fff;
    margin-top: 0.5em;
    padding: 1rem;
    width: 100%;
    border: transparent;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: .7;
    }

    &.btn-small {
        padding: .7rem 1rem;
        font-size: 16px;
    }
    @media(min-width: 768px) {
        margin-top: 0;
        flex-grow: 1;
        flex-shrink: 1;
    }
    
`;