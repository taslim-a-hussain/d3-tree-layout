import React, {useRef} from 'react';
import './index.scss';


const Playground = () => {
    
    // Ref
    const svgRef = useRef();



    return (
        <div className="playground-container">
            <h2>Playground</h2>
            <svg ref={svgRef} style={{
                width: "500px",
                height: "500px",
                backgroundColor: "grey"
            }}>
                <circle className="cirle" r="20" cx="50" cy="60" fill="coral"></circle>
                <circle className="cirle" r="20" cx="350" cy="250" fill="orange"></circle>
                <line className="line" x1="70" y1="70" x2="330" y2="240" stroke="red" strokeWidth="2"></line>
            </svg>
        </div>
    );
};

export default Playground;