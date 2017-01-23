import React from 'react';

export class User extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="small-12 columns">
                        <p>Username: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }
}
