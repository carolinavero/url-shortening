import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../components/Home'
import GlobalStyle from '../GlobalStyles';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    )
}