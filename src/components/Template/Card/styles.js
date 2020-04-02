import styled from 'styled-components';

export const CardContainer = styled.div` 
    text-align: center;
    padding: 2rem;
    background-color: #fff;
    border-radius: 5px;
    position: relative;

     @media(min-width: 768px) { 
         margin: 4rem 0;
     }

`;

export const ImageContainer = styled.div`
    background-color: var(--secondary-color);
    border-radius: 50px;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Separate = styled.div`
    background-color: var(--primary-color);
    width: 10px;
    height: 100px;
    text-align: center;
    margin: 0 auto;

    @media(min-width: 768px) {
        transform: rotate(90deg);
        position: absolute;
        right: 0px;
        top: 20%;
        z-index: -1;
    }
`;
