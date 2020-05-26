import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Head from '../Head';
import Canvas from '../Canvas';
import Svg from '../Svg';
import './index.scss';

const App = () => (
    <HashRouter>
        <Head />
        <Switch>
            <Route path="/" exact component={Canvas} />
            <Route path="/svg" component={Svg} />
        </Switch>
    </HashRouter>
);

export default App;