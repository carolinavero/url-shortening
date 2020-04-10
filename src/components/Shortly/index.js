import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-grid-system';
import { FormContainer, ButtonShorten } from './styles';

import ResultShortly from '../ResultShortly';

import api from '../../services/api';

export default function Shortly (props) { 

    const [url, setUrl] = useState('');   
    const [listLinks, setListLinks] = useState([]);

    const getLinksFromStorage = () => JSON.parse(
        window.localStorage.getItem("allLinks")
    );

    useEffect(() => {
        const linksFromStorage = getLinksFromStorage();
        console.log("links storage", linksFromStorage)
        if (linksFromStorage) {
            setListLinks(linksFromStorage)
            console.log("links storage no if", linksFromStorage)
        }

    }, []);

    const storeLinks = link => {
        console.log("links..", link)
        const newLinks = [link, ...listLinks];
        setListLinks(newLinks);
        window.localStorage.setItem("allLinks", JSON.stringify(newLinks));
    }

    function handleChange(e) {
        e.preventDefault();
        console.log("input foi clicado")
        setUrl({ url: e.target.value }); 
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('handle Submit')        
        console.log('url', url)

        const result = api.post(`api/links/`, url)

            .then(res => {
                var resultNewUrl = res.config.baseURL + res.data.hashid;

                const link = {
                    url: res.data.url,
                    resultNewUrl,
                    isSubmitted: true,
                    copied: false
                };
                console.log("link no resp..", link)
                storeLinks(link);
            
            })
            .catch(function (error) {
                alert(error.res)
            })

    }

    return (

        <>
            <Container>
                <Row>
                    <Col>
                        <FormContainer onSubmit={handleSubmit}>

                            <Row>
                                <Col md={9}>
                                    <input
                                        className="inputField"
                                        type="text"
                                        placeholder="Shorten a link here..."
                                        name="url"
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col md={3}>
                                    <ButtonShorten type="submit" >Shorten It!</ButtonShorten>
                                </Col>
                            </Row>

                        </FormContainer>
                    </Col>
                </Row>
            </Container>

            {  <ResultShortly listLinks={listLinks} />  }
            
        </>
    )

}
