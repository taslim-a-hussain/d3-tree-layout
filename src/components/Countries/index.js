import React, {useRef, useEffect} from 'react';
import {hierarchy, select} from 'd3';
import data from '../../data/data.json';
import './index.scss';

const Countries = () => {
    
    // Ref
    const canvasRef = useRef();
    
    /**
     * Flatens the hierarchy and generates links
     * Links are object that contains *Source and *Target nodes (They are use to draw the linking lines on the tree or force graph)
     * Returns a root node (which has bunch of useful methods attached)
     */
    const root = hierarchy(data);
    console.log('Root node: ', root);

   
    // Component did mount
    useEffect(() => {
        const canvas = select(canvasRef.current);
        const width = canvas.node().getBoundingClientRect().width;
        console.log(width);
    }, []);

    return (
        <div className="canvas" ref={canvasRef}>
        </div>
    );
};


export default Countries;