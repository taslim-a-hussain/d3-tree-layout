import React, {useRef, useEffect, useState} from 'react';
import {select} from 'd3';
import './index.scss';

const Svg = () => {

    // Ref
    const canvasRef = useRef();


    // Component did mount
    useEffect(() => {
        const canvas = select(canvasRef.current);
        
        // Create svg element on the canvas
        const svg = canvas.append('svg').attr('transform', `translate(60, 60)`);
            svg.attr('class', 'circle-svg');

        const g = svg.append('g');
    

        // Create circle
        const circle = g.append('circle');
            circle.attr('r', 50)
                  .attr('cx', 51)
                  .attr('cy', 51)
                  .attr('fill', 'none')
                  .attr('stroke', 'orange')
                  .attr('stroke-width', '2');
        

        // Write text inside the circle
        const text = g.append('text');
            text.text('nocraming')
            text.attr('x', '50%')
            text.attr('y', '50%')
            text.attr('text-anchor', 'middle')
            text.attr('dy', '.3em');


    }, []);

    return (
        <div className="svg-playground-container">
            <div ref={canvasRef}></div>
        </div>
    );
};


export default Svg;