import React, {useRef, useEffect} from 'react';
import {hierarchy, select} from 'd3';
import Tree from '../Tree';
import data from '../../data/data.json';
import './index.scss';

const Canvas = () => {
    
    // Ref
    const canvasRef = useRef();
    const svgRef = useRef();
    const rectRef = useRef();

    
    /**
     * Flatens the hierarchy and generates links
     * Links are object that contains *Source and *Target nodes (They are use to draw the linking lines on the tree or force graph)
     * Returns a root node (which has bunch of useful methods attached)
     */
    const root = hierarchy(data);

   
    // Component did mount
    useEffect(() => {
        // Select canvas element
        const canvas = select(canvasRef.current);
        // Get the width of the canvas
        const width = Math.floor(canvas.node().getBoundingClientRect().width);
        // Get the height of the canvas
        const height = Math.floor(canvas.node().getBoundingClientRect().height);

        // Create svg
        const svg = select(svgRef.current);
                svg.attr('width', width)
                    .attr('height', height);
        
        // Create rect
        const rect = select(rectRef.current);
                rect.attr('width', width - 20)
                    .attr('height', height - 20)
                    .attr('x', 10)
                    .attr('y', 10)
                    .attr('rx', 5)
                    .attr('class', 'rect')
                    .attr('id', 'rectEl');
        
    }, []);

    return (
        <div className="canvas" ref={canvasRef}>
            <svg ref={svgRef}>
                <rect ref={rectRef}>
                    <Tree ref={rectRef} />
                </rect>
            </svg>
        </div>
    );
};


export default Canvas;