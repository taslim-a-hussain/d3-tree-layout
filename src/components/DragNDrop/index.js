import React, {useRef, useEffect} from 'react';
import {select, range, schemeCategory10, drag, event} from 'd3';
import './index.scss';

const DragNDrop = () => {
    const svgRef = useRef();


    const svgWidth = 960;
    const svgHeight = 900;

    const radius = 20;

    const circleData = range(50).map(() => {
        return {
            x : Math.round(Math.random() * (svgWidth - radius * 2 ) + radius),
            y : Math.round(Math.random() * (svgHeight - radius * 2 ) + radius)
        };
    });



    // Component Did Mount
    useEffect(() => {
        const svg = select(svgRef.current);
            svg.attr('width', svgWidth)
                .attr('height', svgHeight)
                .attr('class', 'drag-n-drop-svg');

        const g = svg.append('g');
        
        const circles = g.selectAll('circle');
            circles.data(circleData)
                .enter()
                .append('circle')
                .attr('r', radius)
                .attr('cx', d => d.x)
                .attr('cy', d => d.y)
                .attr('fill', (d, i) => schemeCategory10[i % 10]);


    }, []);

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Drag N Drop</h2>
            <svg ref={svgRef}></svg>
        </div>
    );
};


export default DragNDrop;