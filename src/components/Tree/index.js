import React, {useEffect, useRef} from 'react';
import {hierarchy, tree, select} from 'd3';
import data from '../../data/data.json';
import './index.scss';


const Tree = React.forwardRef((props, canvasRef) => {

    // Ref
    const svgRef = useRef();

    /**
     * Flatens the hierarchy and generates links
     * Links are object that contains *Source and *Target nodes (They are use to draw the linking lines on the tree or force graph)
     * Returns a root node (which has bunch of useful methods attached)
     */
    const root = hierarchy(data);

    const treeLayout = tree(root);

    
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
        svg.node().getB
                svg.attr('width', width - 20)
                    .attr('height', height - 20)
                    .attr('class', 'svg');
    }, []);


    return (
        <React.Fragment>
            <svg ref={svgRef}></svg>
        </React.Fragment>
    );
});


export default Tree;