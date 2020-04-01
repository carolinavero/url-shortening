import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Row, Col } from 'react-grid-system';

import { Form, ButtonShorten, ResultShortly } from './styles';

import api from '../../services/api';

export default class Shortly extends React.Component {
    state = {
        url: '',
        hashid: '',
        copied: false
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
        console.log("btn clicado")

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
                    hashid: resultNewUrl
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
                        <Form>
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
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        
            <div className="resultContainer">
            
            {/* <p>bloco do resultado</p> */}
                <ResultShortly>

                    <div className="original-link"> {this.state.url}</div>
                    <div className="separate"></div>
                    <div className="new-link">
                        <a href={`${this.state.hashid}`} data-link="test" >{this.state.hashid}</a>

                        <CopyToClipboard
                            onCopy={this.onCopy}
                            options={{ message: 'Copied!!' }}
                            text={this.state.hashid}
                        >
                            <ButtonShorten 
                                className="btn-small" 
                                onClick={(e) => this.handleCopy()}>

                                {this.state.copied ? <div className="copiedButton"> Copied </div> : 'Copy'}

                            </ButtonShorten>

                        </CopyToClipboard>

                    </div>

                </ResultShortly>
            </div>
        
        </>

        )
    
    }

}