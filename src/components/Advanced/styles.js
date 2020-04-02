import styled from 'styled-components';

export const AboutContainer = styled.div` 
    text-align: center;
    padding: 4rem 1rem;

    h2 {
        font-size: 1.5rem;
    }

    p {
        max-width: 100%;
    }

    @media(min-width: 768px) {
        padding: 4rem 1rem 1rem 1rem;
        h2 {
            font-size: 3rem;
        }
        p {
            margin: 0 auto;
            max-width: 40%;
        }
    }

`;
