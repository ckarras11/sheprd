import React from 'react';

const Display = (props) => {
    let string = props.userInput.split('').reverse().join('');
    return (
        <div>
            <h2>{string}</h2>
        </div>
    );
};

export default Display;