import React from 'react';

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="small-12 columns">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="small-12 columns">
                    <button onClick={() => props.changeUsername('Vicki')} className='button'>Change the Username</button>
                </div>
            </div>
        </div>
    );
};
