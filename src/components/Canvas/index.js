import React, {useRef} from 'react';
import Tree from '../Tree';
import './index.scss';

const Canvas = () => {
    
    // Ref
    const canvasRef = useRef();


    return (
        <React.Fragment>
            <div className="canvas" ref={canvasRef}>
                <Tree ref={canvasRef} />
            </div>
            <h2>Tidy Tree with D3 Panning and Zooming</h2>
        </React.Fragment>
    );
};


export default Canvas;