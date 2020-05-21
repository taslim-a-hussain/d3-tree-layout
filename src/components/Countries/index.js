import React from 'react';
import {hierarchy} from 'd3';
import data from '../../data/data.json';

const Countries = () => {
  
    console.log('Raw Data: ', data);
    const root = hierarchy(data);
    console.log(root);

    return (
        <div>
            <p>Countries component</p>
        </div>
    );
};


export default Countries;