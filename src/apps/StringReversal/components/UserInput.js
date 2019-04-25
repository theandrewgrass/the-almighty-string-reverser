import React from 'react';


function UserInput(props) {
    return (
        <div className="input-section">
            <h1 className="description-text">The Almighty String Reverser</h1>
            <input className="text-box" placeholder="(Type your string here!)" type="text" onChange={props.getString} />
        </div>
    );
}

export default UserInput;