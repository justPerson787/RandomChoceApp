import React from 'react';

const Action = (props) => (
    <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What to choose?
        </button>
    </div>
);

export default Action;