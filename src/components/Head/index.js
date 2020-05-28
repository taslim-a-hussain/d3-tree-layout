import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';

const Head = () => (
    <React.Fragment>
        <h1 style={{
            textAlign: "center"
        }}>Mastering D3 Tree Layout</h1>
        <nav>
            <NavLink to="/" activeClassName="active" exact>Tidy Tree</NavLink>
            <NavLink to="/drag-n-drop" activeClassName="active">Drag & Drop</NavLink>
            <NavLink to="/playground" activeClassName="active">Playground</NavLink>
        </nav>
    </React.Fragment>
);


export default Head;