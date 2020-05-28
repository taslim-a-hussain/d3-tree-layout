import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Head from '../Head';
import Canvas from '../Canvas';
import DragNDrop from '../DragNDrop';
import Playground from '../Playground';
import './index.scss';

const App = () => (
    <HashRouter>
        <Head />
        <Switch>
            <Route path="/" exact component={Canvas} />
            <Route path="/drag-n-drop" component={DragNDrop} />
            <Route path="/playground" component={Playground} />
        </Switch>
    </HashRouter>
);

export default App;