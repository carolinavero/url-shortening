import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const TopContainer = styled.nav` 
    background-color: #fff;
    .navbar {
        padding-top: 2rem;

        .navbar-items {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
        }

        @media(min-width: 768px) {
            ul {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                li {
                    width: auto;
                }
            }
            .navbar-items {
                
                justify-content: space-between;
            }

        }

    }

    .menu-toggle {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    @media(min-width: 768px) {
        justify-content: space-evenly;
        flex-direction: row;
    }
`;

export const MenuButton = styled.button` 
    background-color: #fff;
    border: none;
    padding: 15px;
    
`;

export const StyledPopup = styled(Popup)`
    
    &[style] {
        width: 90%;
        background-color: red;
    }

    &-overlay {
        background-color: red;
    }
    &-content {
       /*  background-color: pink;
        border: none;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */

        width: 80%;
        
    }
`;