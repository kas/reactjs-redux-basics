import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App'; // no curly braces for default exports in ES6

import store from './store';

render(
    <Provider store={store}><App/></Provider>, window.document.getElementById('app'));
