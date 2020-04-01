import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const TopContainer = styled.nav` 
    
    
    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    @media(min-width: 768px) {
        justify-content: space-evenly;
        flex-direction: row;
       
    }
`;

export const MenuButton = styled.button` 
    background-color: #fff;
    border: none;
    padding: 10px;
    
`;

export const StyledPopup = styled(Popup)`
    &-overlay {
        background-color: red;
    }
    &-content {
        background-color: pink;
        border: none;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;