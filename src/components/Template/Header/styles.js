import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #fff;

    .main-content-block {
        flex-direction: column-reverse;
        margin: 1rem 0 2rem 0;
    }
    .main-content {
        text-align: center;
    }

    @media(min-width: 768px) {
        .container {
            margin-left: 150px;
        }
        .main-content-block {
            flex-direction: row;
            margin: 2rem 0 3rem 0;

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
            margin-left: 15px;
        }
    }
`;