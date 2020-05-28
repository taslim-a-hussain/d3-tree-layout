import React, {useRef, useEffect, useState} from 'react';
import {select} from 'd3';
import './index.scss';

const useMousePosition = () => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // Component did mount
    useEffect(() => {
        const handleMousemove = (e) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY
            });
        };
    
    
        // Add mousemove event listener
        document.addEventListener('mousemove', handleMousemove);
    
        // Component Unmount
        return () => {
            document.removeEventListener('mousemove', handleMousemove);
        };
    }, [mousePosition]);

    return mousePosition;

};


const Playground = () => {

    // Ref
    const canvasRef = useRef();


    const mousePosition = useMousePosition();


    // Component did mount
    useEffect(() => {
        const svg = select(canvasRef.current);

        svg.attr('width', 50)
            .attr('height', 50)
            .attr('class', 'svg-play')
            .attr('transform', `translate(${mousePosition.x - 25}, ${mousePosition.y - (68 + 37 + 25)})`);


    }, [mousePosition]);



    return (
        <div className="playground-container">
            <svg ref={canvasRef}>

            </svg>
            <p>x:{mousePosition.x} y:{mousePosition.y}</p>
            {console.log('randered...')}
        </div>
    );
};


export default Playground;