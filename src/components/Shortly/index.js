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
        if (linksFromStorage) {
            setListLinks(linksFromStorage)
        }

    }, []);

    const storeLinks = link => {
        const newLinks = [...listLinks, link];
        setListLinks(newLinks);
        window.localStorage.setItem("allLinks", JSON.stringify(newLinks));
    }

    function handleChange(e) {
        e.preventDefault();
        setUrl({ url: e.target.value }); 
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        e.target.reset();

        api.post(`api/links/`, url)
        
            .then(res => {
                var resultNewUrl = res.config.baseURL + res.data.hashid;

                const link = {
                    url: res.data.url,
                    resultNewUrl,
                    isSubmitted: true,
                    copied: false
                };
                storeLinks(link);

            })
            .catch(function (error) {
                alert("Error")
            })
    }

    return (

        <>
            <div className="bg-item"></div>
            <Container >
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
