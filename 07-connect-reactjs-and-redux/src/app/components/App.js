import React from 'react';
import {connect} from 'react-redux';

import {Main} from './Main';
import {User} from './User';

class App extends React.Component {
    render() {
        return (
            <div>
                <Main changeUsername={() => this.props.setName('Vicki')}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {user: state.userReducer, math: state.mathReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({type: 'SET_NAME', payload: name});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
