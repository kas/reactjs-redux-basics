// import React from 'react';
// import {render} from 'react-dom'
//
// import {Main} from './components/Main';
// import {User} from './components/User';
//
// class App extends React.Component {
//     constructor() {
//         super();
//
//         this.state = {
//             username: 'Ken'
//         }
//     }
//
//     changeUsername(newUsername) {
//         this.setState({username: newUsername});
//     }
//
//     render() {
//         return (
//             <div>
//                 <Main changeUsername={(newUsername) => this.changeUsername(newUsername)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }
//
// render(
//     <App/>, window.document.getElementById('app'));

import {createStore} from 'redux';

const initialState = {
    username: 'Ken',
    result: 1,
    lastValues: []
};

const reducer = (state = initialState, action) => {
    let initialStateResult = state.result;

    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [initialStateResult, ...state.lastValues]
            };

            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [initialStateResult, ...state.lastValues]
            };

            break;
    }

    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log('Store updated!', store.getState());
});

store.dispatch({type: 'ADD', payload: 20});

store.dispatch({type: 'SUBTRACT', payload: 1});
