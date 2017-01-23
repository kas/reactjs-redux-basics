import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import App from './containers/App'; // no curly braces for default exports in ES6

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    let initialStateResult = state.result;

    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [
                    initialStateResult, ...state.lastValues
                ]
            };

            break;
        case 'SUBTRACT':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [
                    initialStateResult, ...state.lastValues
                ]
            };

            break;
    }

    return state;
};

const userReducer = (state = {
    name: 'Ken',
    age: 20
}, action) => {
    let initialStateResult = state.result;

    switch (action.type) {
        case 'SET_NAME':
            state = {
                ...state,
                name: action.payload
            };

            break;
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            };

            break;
    }

    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log('Logged Action:', action);
    next(action);
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger()));

store.subscribe(() => {
    // console.log('Store updated!', store.getState());
});

render(
    <Provider store={store}><App/></Provider>, window.document.getElementById('app'));
