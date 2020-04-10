import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const NavContainer = styled.nav`
    border-radius: 10px;
    background-color: var(--secondary-color);
    width: 100%;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;

    color: #fff;

    a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        padding: 1rem 0;
        width: 100%;
    }
    @media(min-width: 768px) {
            flex-direction: row;
        a {
            padding: .5rem 1rem;
            color: #999;
            &:hover {
                color: #333;
            }
        }
    }
`;

export default Menu  => (
    
    <NavContainer>
        <List>
            <ListItem>
                <Link to="/">Features</Link>
            </ListItem>
            <ListItem>
                <Link to="/pricing">Pricing</Link>
            </ListItem>
            <ListItem>
                <Link to="/resources">Resources </Link>
            </ListItem>
        </List>
        <hr />
        <List className="login-menu">
            <ListItem>
                <Link to="/login">Login</Link>
            </ListItem>
            <ListItem>
                <button className="button primary-button">Sign Up</button>
            </ListItem>

        </List>
    </NavContainer>
);