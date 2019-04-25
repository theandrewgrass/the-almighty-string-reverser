import React from 'react';

function Results(props) {
    return (
        <div className="results-section">
            <p className="results-text">{props.reversedString}</p>
        </div>
    );
}

export default Results;