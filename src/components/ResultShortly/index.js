import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Row, Col } from 'react-grid-system';

import { ButtonShorten, Results } from './styles';

export default class ResultShortly extends React.Component {
    state = {
        copied: false
    }

    handleCopy = (e) => {
        console.log("copiou!!")
        console.log("o link é:", this.props.hashid)
        var copiedLink = this.props.hashid;
        console.log("valor na variavel", copiedLink)
        this.setState({
            copied: true
        })

    }

render() {
    return (
        <>

            <div className="resultContainer">

                <Container>
                    <Row>
                        <Col>

                             <Results>

                                <div className="original-link"> {this.props.url}</div>
                                <div className="separate"></div>
                                <div className="new-link-block">
                                    <div className="new-link">
                                        <a href={`${this.props.hashid}`}>{this.props.hashid}</a>
                                    </div>

                                    <CopyToClipboard
                                        onCopy={this.onCopy}
                                        options={{ message: 'Copied!!' }}
                                        text={this.props.hashid}
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

                            </Results> 

                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    )
    }
}

