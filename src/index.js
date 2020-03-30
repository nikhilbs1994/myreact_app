import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './container/reducer';
import thunk from 'redux-thunk';
import { login } from './container/action/userAction';

const store = createStore(
    allReducer,
    compose(
        applyMiddleware(thunk)
    )
);

if(sessionStorage.getItem("isLoggedIn")) {
    store.dispatch(login());
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
