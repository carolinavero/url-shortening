import styled from 'styled-components';

export const CardBlockContainer = styled.div `
    .card-col {
        padding-left: 0;
        padding-right: 0;
    }
`;

export const CardContainer = styled.div` 

    position: relative;
    padding-top: 4rem;

    .card {
        text-align: center;
        padding: 2rem;
        background-color: #fff;
        border-radius: 5px;
        position: initial;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        
    }
    .card-header {
        display: flex;
        justify-content: center;
        
    }
    .card-body {
        padding-top: 30px;
    }
    .card-alignment,
    .card-alignment-1,
    .card-alignment-2 {
        align-items: center;
    }
    

    @media(min-width: 768px) { 

        margin: 4rem 0;
        padding-top: 0;

        .card {
            margin: 0;
            text-align: left;
            min-height: 350px;
        }
        .card-alignment,
        .card-alignment-1,
        .card-alignment-2 {
            align-items: flex-start;
        }
    
        .card-alignment {
            margin-top: 2.5rem;
        }
        .card-alignment-1 {
            margin-top: 4.5rem;
        }
        .card-alignment-2 {
            margin-top: 7rem;
        }
        .card-header {
            justify-content: flex-start;
            
        }
    }

`;

export const ImageContainer = styled.div`
    background-color: var(--secondary-color);
    border-radius: 50px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    position: absolute;

    &.icon-block {
        top: 10px;
        position: absolute;
    }
    &.icon-block-1 {
        top: 20px;
        position: absolute;
    }
    &.icon-block-2 {
        top: 30px;
        position: absolute;
    }
    

    @media (min-width: 768px) {
        margin: 0;
        position: absolute;

        &.icon-block {
            top: 10px;
            position: absolute;
        }
        &.icon-block-1 {
            top: 40px;
            position: absolute;
        }
        &.icon-block-2 {
            top: 70px;
            position: absolute;
        }
    }

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
        top: 40%;
        z-index: -1;
    }
`;
