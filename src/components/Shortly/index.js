import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Row, Col } from 'react-grid-system';

import { Form, ButtonShorten, ResultShortly } from './styles';

import api from '../../services/api';

export default class Shortly extends React.Component {
    state = {
        url: '',
        hashid: '',
        copied: false,
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
       /*  var resultContainer = document.querySelector('.resultContainer') */

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
    handleCopy(e) {
        console.log("copiou!!")
        console.log("teoricamente, o link é:", this.state.hashid)
        var copiedLink = this.state.hashid;
        console.log("valor na variavel", copiedLink)
        this.setState( { 
            copied: true
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
            
        
            <div className="resultContainer">

                <Container>

                   {/*  {this.state.isSubmitted.map((answer, i) => {
                        console.log("for each")
                        return (<ResultShortly key={i} />)
                    })} */}
                    <Row>
                        <Col>
                            
                            {/* localStorage !== null && */}

                            {this.state.isSubmitted && 
                                
                            <ResultShortly>

                                <div className="original-link"> {this.state.url}</div>
                                <div className="separate"></div>
                                <div className="new-link-block">
                                    <div className="new-link">
                                        <a href={`${this.state.hashid}`}>{this.state.hashid}</a> 
                                    </div>

                                    <CopyToClipboard
                                        onCopy={this.onCopy}
                                        options={{ message: 'Copied!!' }}
                                        text={this.state.hashid}
                                    >
                                        {this.state.copied ? 
                                            <ButtonShorten className="btn-small copiedButton" onClick={(e) => this.handleCopy()}> Copied!</ButtonShorten>
                                            : 
                                            <ButtonShorten
                                                className="btn-small"
                                                onClick={(e) => this.handleCopy()}
                                            > Copy
                                            </ButtonShorten>
                                        } 

                                    </CopyToClipboard>

                                </div>

                            </ResultShortly>

                        }
        
                        </Col>
                    </Row>
                </Container>
            </div>
        
        </>

        )
    
    }

}