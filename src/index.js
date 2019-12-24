import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// configureStore 
import { configureStore } from './store/index';
export const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route path="/">
                <App/>
            </Route>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
