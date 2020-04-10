import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Row, Col } from 'react-grid-system';

import { ButtonShorten, Results } from './styles';

export default function ResultShortly({ listLinks }){
    const [listCopies, setListCopies] = useState([false, false, true]);
    const [lista, setLista] = useState([])
    
    function handleCopy (index) {
        console.log("copiou!!")
        console.log("index!!", index)

        let item = lista[index];
        item.copied = true;
        let listCopy = lista;
        listCopy[index] = item;

        console.log(lista[index])
        setLista(listCopy);
       
    }

    console.log("lista de links no result", lista)

    useEffect(() => {
        setLista(listLinks);
        console.log("useeffect", lista)
    }, [listLinks])

    console.log(lista);

        return (
            <>

            <div className="resultContainer">

                <Container>
                    <Row>
                        <Col>

                            {lista.map((link, index) => (
                                <Results key={index}> 

                                    <div className="original-link"> {link.url}</div>
                                    <div className="separate"></div>
                                    <div className="new-link-block">
                                        <div className="new-link">
                                            <a href={`${link.resultNewUrl}`}>{link.resultNewUrl}</a>
                                        </div>

                                        <CopyToClipboard
                                           /*  onCopy={copied, true} */
                                            options={{ message: 'Copied!!' }}
                                            text={link.resultNewUrl}
                                        >
                                            {link.copied ?
                                                <ButtonShorten 
                                                    className="btn-small copiedButton" 
                                                    onClick={(e) => handleCopy(index)}
                                                > Copied!</ButtonShorten>
                                                :
                                                <ButtonShorten
                                                    className="btn-small"
                                                    onClick={(e) => handleCopy(index, e)}
                                                > Copy
                                                </ButtonShorten>
                                            }

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

