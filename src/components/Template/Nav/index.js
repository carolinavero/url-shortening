import React from 'react'
import Popup from 'reactjs-popup';
import Menu from '../Menu';

import styled from 'styled-components';

import logoImg from '../../../assets/logo.svg'

const TopContainer = styled.nav ` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 30px;
`;

const MenuButton = styled.button ` 
    background-color: transparent;
    border: 1px solid #ddd;
    padding: 20px;
    
`;
const StyledPopup = styled(Popup) `
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

const Nav  = () => {
    return (

        <>
        <TopContainer>
            <div>
                <img src={logoImg} alt="Logo" />
            </div>

            <StyledPopup 
                trigger={<MenuButton />} 
                modal
                position="bottom"
                closeOnDocumentClick
            >
            
                <Menu />
            </StyledPopup>

        </TopContainer>

        </>

    )
}

export default Nav;
