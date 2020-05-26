import React, {useRef, useEffect, useState} from 'react';
import {select} from 'd3';
import Tree from '../Tree';
import './index.scss';

const Canvas = () => {
    
    // Ref
    const canvasRef = useRef();


    return (
        <div className="canvas" ref={canvasRef}>
            <Tree ref={canvasRef} />
        </div>
    );
};


export default Canvas;