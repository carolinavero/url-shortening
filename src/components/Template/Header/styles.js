import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #fff;
    .main-content {
        text-align: center;
    }

    @media(min-width: 768px) {
        .main-content {
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: center;
            text-align: left;
        }
    }
`;