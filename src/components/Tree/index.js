import React, {useEffect} from 'react';


const Tree = React.forwardRef((props, rectRef) => {
    
    // Component did mount
    useEffect(() => {
        console.log(rectRef);
        console.log(rectRef.current);

        

    }, []);


    return (
        <React.Fragment>
            
        </React.Fragment>
    );
});


export default Tree;