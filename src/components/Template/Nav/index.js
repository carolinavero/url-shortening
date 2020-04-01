import React from 'react'
import Menu, { List, ListItem } from '../Menu';
import { Container, Row, Col,  Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom'
import { TopContainer, MenuButton, StyledPopup } from './styles'
 
import logoImg from '../../../assets/logo.svg'


const Nav  = () => {
    return (
        <>

        <TopContainer>
         
            <Container>
                <Row className="navbar">
                    <Col>
                        <img src={logoImg} alt="Logo" />
                                                
                        <Hidden xs sm>
                            
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

                        </Hidden>
                    </Col>
                    <Col>

                        <Hidden md lg xl>
                            <StyledPopup
                                trigger={
                                    <MenuButton>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                                    </MenuButton>
                                }
                                modal
                                position="bottom"
                                closeOnDocumentClick
                            >

                                <Menu />
                            </StyledPopup>

                        </Hidden>

                        <Hidden xs sm>
                            <List>
                                <ListItem>
                                    <Link to="/login">Login</Link>
                                </ListItem>
                                <ListItem>
                                    <button class="button primary-button">Sign Up</button>
                                </ListItem>

                            </List>
                        </Hidden>
                        
                    </Col>
                </Row>
            </Container>

        </TopContainer>

        </>

    )
}

export default Nav;
