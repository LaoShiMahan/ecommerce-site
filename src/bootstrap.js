import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';

import history from './history';

import Layout from './components/layout';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Account from './components/account/account';

function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={ SignIn } />
                        <Route exact path='/signin' component={ SignIn } />
                        <Route exact path='/signup' component={ SignUp } />
                        <Route exact path='/account' component={ Account } />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
        , document.querySelector('.layout-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);