import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #fff;

    .main-content-block {
        flex-direction: column-reverse;
    }
    .main-content {
        text-align: center;
    }

    @media(min-width: 768px) {

        .main-content-block {
            flex-direction: row;
            .button {
                width: 40%;
                margin-top: 1rem;
            }
        }
        .main-content {
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: center;
            text-align: left;
        }
    }
`;