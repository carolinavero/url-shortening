import React from 'react';
/* import { Link } from 'react-router-dom' */
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styled from 'styled-components';

import Cards from '../Template/Card';

import bgShortenMobile from '../../assets/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../assets/bg-shorten-desktop.svg';

import api from '../../services/api';


const Form = styled.form`
    background-color: var(--secondary-color);  
    background-repeat: no-repeat;
    background-position: right;
    background-image: url(${bgShortenMobile});
    padding: 1.5rem;
    margin: 2rem;
    border-radius: 8px;
    @media(min-width: 768px) {
        background-image: url(${bgShortenDesktop});
    }
`;

const ButtonShorten = styled.button`
    background: var(--primary-color);
    border-radius: 5px;
    color: #fff;
    margin-top: 0.5em;
    padding: 1rem;
    width: 100%;
    border: transparent;
    font-size: 18px;
    font-weight: 600;
    &.btn-small {
        padding: .7rem 1rem;
        font-size: 16px;
    }
    
`; 
const ResultShortly = styled.div `
    background-color: #fff;
    border-radius: 5px;
    margin: 15px 30px;
    
    .original-link {
        padding: 15px;
        border-bottom: 1px solid #ddd;

    }
    .new-link {
        color: var(--primary-color);
        padding: 15px;
       
    }
    a {
        color: var(--primary-color);
        text-decoration: none;
       
    }
    .separate {
        border-bottom: 1px solid #fefefe;
    }
    button {
        .copiedButton {
            background-color: var(--secondary-color)
        }
    }
 
`;

const AboutContainer = styled.div ` 
    text-align: center;
    padding: 15px;
`;

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
                console.log(error.response)
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
        <Form>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Shorten a link here..." name="url" onChange={this.handleChange} />
                <ButtonShorten type="submit" >Shorten It!</ButtonShorten>
            </form>
        </Form>
       

        <ResultShortly>
            <div className="original-link"> {this.state.url}</div>
            <div className="separate"></div>
            <div className="new-link">
                <a href={`${this.state.hashid}`} data-link="test" >{this.state.hashid}</a>

                <CopyToClipboard 
                    onCopy={this.onCopy}
                    options={{message: 'Copied!!'}}
                    text={this.state.hashid}
                >
                    <ButtonShorten className="btn-small" onClick={(e) => this.handleCopy()}>
                            {this.state.copied ? <div className="copiedButton"> 'Copied' </div> : 'Copy'}
                    </ButtonShorten> 

                </CopyToClipboard>
               
            </div>

               
        </ResultShortly>
        {/* <ResultShortly>
            <div className="original-link"> https://frontendmentor.ifsdfsdfsdfo</div>
            <div className="separate"></div>
            <div className="new-link">
                <Link to="#">link reduzido</Link>
                <ButtonShorten className="btn-small active">Copied!</ButtonShorten>
            </div>

        </ResultShortly> */}

        <AboutContainer>
                <h2> Advanced Statistics</h2>

                <p>Track how your links are performing across the web with our 
                    advanced statistics dashboard.</p>
                <Cards />

        </AboutContainer>
        </>
    )
    
    }

}