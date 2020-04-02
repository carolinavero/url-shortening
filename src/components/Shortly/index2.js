import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { Form, ButtonShorten } from './styles';

import ResultShortly from '../ResultShortly';

import api from '../../services/api';

export default function Shortly (){
    const [url, setUrl] = useState('');
    const [hashid, setHashid] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [count, setCount] = useState(0);
    /* 

    const newUrl = localStorage.getItem('url')
    const newHashid = localStorage.getItem('hashid')
    const [anotherUrl, setAnotherUrl] = useState(0);  */
/*    const history = useHistory(); */
  

    handleChange = (e) => {
        e.preventDefault();
        console.log("input foi clicado")

        this.setState({
            url: e.target.value
        });

        console.log(e.target.value)
    }

    handleSubmit = (e) => {
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
                    /* JSON.stringify(this.state) */
/*                     localStorage.setItem('@shortly-app/info', JSON.stringify(this.state));

 */             localStorage.setItem('url', res.data.url)
                localStorage.setItem('hashid', res.data.hashid)

                /*       console.log("entrou no then")
                      console.log(res)
                      console.log(res.data.hashid);
                      console.log(res.data.url); */

            })
            .catch(function (error) {
                alert(error.response.data.url)
            })

    }

    /*     useEffect(function persistInfo() {
            localStorage.setItem('urlInfo', url);
        });
     */

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
                                    <p>Você clicou {count} vezes.</p>
                                    <ButtonShorten type="submit" onClick={() => setCount(count + 1) }>Shorten It!</ButtonShorten>
                                </Col>
                            </Row>

                        </Form>
                    </Col>
                </Row>
            </Container>

            {isSubmitted &&
                localStorage !== null &&
                <ResultShortly url={url} hashid={hashid} isSubmitted={isSubmitted} />}


        </>

    )

}