import React from 'react';
/* import { CopyToClipboard } from 'react-copy-to-clipboard'; */
import { Container, Row, Col } from 'react-grid-system';
import { Form, ButtonShorten } from './styles';

import ResultShortly from '../ResultShortly';

import api from '../../services/api';

export default class Shortly extends React.Component {
    state = {
        url: '',
        hashid: '',
        isSubmitted: false
    }
    
    handleChange = (e) => {
        e.preventDefault();
        console.log("input foi clicado")

        this.setState({ 
            url: e.target.value 
        });
        
        console.log(e.target.value )
    } 

    handleSubmit = (e) => {
        e.preventDefault();      
        localStorage.setItem('@shortly-app/username', "user");

        const urlTyped = this.state.url
        
        console.log("constante", urlTyped)
        console.log(this.state.url)

        api.post(`api/links/`, { url: urlTyped })
   
            .then(res => {
                var resultNewUrl = res.config.baseURL + res.data.hashid;
                var resultUrl = res.data.url;

                this.setState({
                    url: resultUrl,
                    hashid: resultNewUrl,
                    isSubmitted: true
                });

                console.log("entrou no then")
                console.log(res)
                console.log(res.data.hashid);
                console.log(res.data.url);
           
            })
            .catch(function(error) {
                alert(error.response.data.url)
            })
    }


    render() {

        return (
        
        <>

            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            
                            <Row>
                                <Col md={9}>
                                    <input
                                        className="inputField"
                                        type="text"
                                        placeholder="Shorten a link here..."
                                        name="url"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col md={3}>
                                    <ButtonShorten type="submit" >Shorten It!</ButtonShorten>
                                </Col>
                            </Row>
                           
                        </Form>
                    </Col>
                </Row>
            </Container>
            
            {this.state.isSubmitted && 
            localStorage !== null && 
            <ResultShortly url={this.state.url} hashid={this.state.url} isSubmitted={this.state.isSubmitted} />}   
        
        </>

        )
    
    }

}