import React, {useEffect, useRef} from 'react';
import {hierarchy, tree, select, linkHorizontal, zoom, event} from 'd3';
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
    let root = hierarchy(data);
    
    
    // Component did mount
    useEffect(() => {

        // Select canvas element
        const canvas = select(canvasRef.current);
        // Get the width of the canvas
        const width = Math.floor(canvas.node().getBoundingClientRect().width);
        // Get the height of the canvas
        const height = Math.floor(canvas.node().getBoundingClientRect().height);

        const svgWidth = width - 20;
        const svgHeight = height -20;
        
        // Create svg
        const svg = select(svgRef.current);
                svg.attr('width', svgWidth)
                    .attr('height', svgHeight)
                    .attr('class', 'svg');

        /** ****************************************************************************************** */

        // Generate tree layout with the default
        const treeLayout = tree().size([svgHeight - 30, svgWidth - 100]);   
        
        // Generate Links
        const links = treeLayout(root).links();

        // Horizontal link path generator
        const genHorizontalLink = linkHorizontal().x(d => d.y).y(d => d.x);
        
        // Group paths
        const gPath = svg.append('g').attr('transform', `translate(70, 15)`);

        // Add Zoom
        svg.call(zoom().on('zoom', () => {
            gPath.attr('transform', event.transform);
        }));
        
        // Render links
        gPath.selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('d', genHorizontalLink);


        // Render text
        gPath.selectAll('text')
            .data(root.descendants())
            .enter()
            .append('text')
            .attr('x', d => d.y)
            .attr('y', d => d.x)
            .attr('dy', '0.32em')
            .attr('text-anchor', d => d.children ? 'middle' : 'start')
            .attr('font-size', d => 3.25 - d.depth + 'em')
            .text(d => d.data.data.id);
    }, []);


    return (
        <React.Fragment>
            <svg ref={svgRef}></svg>
        </React.Fragment>
    );
});


export default Tree;