import React from 'react';
import {render} from 'react-dom'

import {Main} from './components/Main';
import {User} from './components/User';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            username: 'Ken'
        }
    }

    changeUsername(newUsername) {
        this.setState({username: newUsername});
    }

    render() {
        return (
            <div>
                <Main changeUsername={(newUsername) => this.changeUsername(newUsername)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(
    <App/>, window.document.getElementById('app'));
