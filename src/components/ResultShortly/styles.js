
import styled from 'styled-components';

export const ResultShortly = styled.div`
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 30px;
   
    .original-link {
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }
    
    .new-link {
        color: var(--primary-color);
        
    }
    a {
        color: var(--primary-color);
        text-decoration: none;
    }
    .separate {
        border-bottom: 1px solid #fefefe;
    }
    .copiedButton {
        background-color: var(--secondary-color);
    }

    @media(min-width: 768px) {
        margin: 1rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .separate {
            display: none;
        }
        .original-link {
            border-bottom: none;
        }
        .new-link-block {
            display: flex;
            padding: 15px;
            align-items: center
        }
        .new-link {
            flex-grow: 4;
            flex-shrink: 0;
            margin-right: 2rem;
        }
        
    }
 
`;