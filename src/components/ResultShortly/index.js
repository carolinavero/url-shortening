import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Row, Col } from 'react-grid-system';

import { ButtonShorten, Results } from './styles';

export default function ResultShortly({ listLinks }){
    const [myList, setMyList] = useState([])
    
    function handleCopy (index, e) {

        let item = myList[index];
        item.copied = true;

        let listCopy = myList;
        listCopy[index] = item;

        if(item.copied === true) {
            e.target.style.backgroundColor = "hsl(257, 27%, 26%)";
            e.target.innerHTML = "Copied!";
        }
        setMyList(listCopy);
       
    }

    useEffect(() => {
        setMyList(listLinks);
    }, [listLinks])


    return (
        <>

        <div className="resultContainer">

            <Container>
                <Row>
                    <Col>

                        {myList.map((link, index) => (
                            <Results key={index}> 

                                <div className="original-link"> {link.url}</div>
                                <div className="separate"></div>
                                <div className="new-link-block">
                                    <div className="new-link">
                                        <a href={`${link.resultNewUrl}`}>{link.resultNewUrl}</a>
                                    </div>

                                    <CopyToClipboard
                                        options={{ message: 'Copied!!' }}
                                        text={link.resultNewUrl}
                                    >                                     
                                        <ButtonShorten
                                            className="btn-small"
                                            onClick={(e) => handleCopy(index, e)}
                                        > Copy
                                        </ButtonShorten>
                                    
                                    </CopyToClipboard>

                                </div>

                            </Results> 
                        ))}
                        
                    </Col>
                </Row>
            </Container>
        </div>

    </>

    )
    
}

