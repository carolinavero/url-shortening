import React from 'react';
import Nav from '../Template/Nav';
import Header from '../Template/Header';
import Shortly from '../Shortly/index';

import Advanced from '../Advanced';
import Cards from '../Template/Card';
import Footer from '../Template/Footer';

export default function Home() {

/*     const [entries, storeEntry] = ShortLinks();
    const handleAddEntry = (entry) => storeLinks(entry); */
    return (
        <>

        <Nav />
        <Header />
        <Shortly /* addEntry={handleAddEntry} *//>
        <Advanced />
        <Cards />
        <Footer />


        </>
        
    )

}