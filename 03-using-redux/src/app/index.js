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

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            state = state + action.payload;
            break;
        case 'SUBTRACT':
        state = state - action.payload;
            break
    }

    return state;
};

const store = createStore(reducer, 30);

store.subscribe(() => {
  console.log('Store updated!', store.getState());
});

store.dispatch({type: 'ADD', payload: 20});

store.dispatch({type: 'SUBTRACT', payload: 1});
