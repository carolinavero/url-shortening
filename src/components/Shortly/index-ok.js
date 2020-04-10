import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FormContainer, ButtonShorten } from './styles';

import ResultShortly from '../ResultShortly/index-teste';

import api from '../../services/api';

export default class Shortly extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            hashid: '',
            isSubmitted: false,
        
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log("input foi clicado")

        this.setState({ 
            url: e.target.value 
        });
        
        console.log(e.target.value )
    } 

    handleSubmit = (e) =>  {
        e.preventDefault();      
        
        const urlTyped = this.state.url

        api.post(`api/links/`, { url: urlTyped })

            .then(res => {
                var resultNewUrl = res.config.baseURL + res.data.hashid;
                var resultUrl = res.data.url;

                this.setState({
                    url: resultUrl,
                    hashid: resultNewUrl,
                    isSubmitted: true
                });

                console.log(this.state)
 

                localStorage.setItem('url', res.data.url)
                localStorage.setItem('hashid', res.data.hashid)

            })
            .catch(function (error) {
                alert(error.response.data.url)
            })
        
    }

 render() {
    return (
        
        <>
            <span className="bg-item"></span>
            <Container>
                <Row>
                    <Col>
                        
                        <FormContainer >
                            
                            <form onSubmit={this.handleSubmit}>
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
                            </form>
                           
                        </FormContainer>
                    </Col>
                </Row>
            </Container>
            
            
            {this.state.isSubmitted && 
            localStorage !== null && 
            <ResultShortly url={this.state.url} hashid={this.state.hashid} isSubmitted={this.state.isSubmitted} />} 

            
        </>

        )

    }
}