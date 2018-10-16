import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'; // Redux provider must wrap everything
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import burgerBuilderReducer from './store/reducers/burgerBuilder';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(burgerBuilderReducer, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
