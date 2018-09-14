import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import './style/main.scss';

import history from './history';

import Layout from './components/layout';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';

function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={history}>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={SignIn} />
                        {/* <Route exact path='/' component={SignUp} /> */}
                    </Switch>
                </Layout>
            </Router>
        </Provider>
        , document.querySelector('.layout-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);