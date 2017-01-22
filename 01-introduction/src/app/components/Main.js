import React from 'react';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 columns">
                        <button onClick={() => this.props.changeUsername('Vicki')} className='button'>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}
