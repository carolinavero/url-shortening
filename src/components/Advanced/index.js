import React from 'react'

import Cards from '../Template/Card';
import { AboutContainer } from './styles';

export default function Footer() {
    return (
        <>

            <AboutContainer>
                <h2> Advanced Statistics</h2>

                <p>Track how your links are performing across the web with our
                            advanced statistics dashboard.</p>
                <Cards />

            </AboutContainer>

        </>
    )
}