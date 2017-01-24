import React from 'react';

export const User = (props) => {
    return (
        <div>
            <div className="row">
                <div className="small-12 columns">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="small-12 columns">
                    <p>Username: {props.username}</p>
                </div>
            </div>
        </div>
    );
};
