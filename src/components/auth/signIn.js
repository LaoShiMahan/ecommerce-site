import React, { Component } from 'react';
import SignInForm from './signInForm';
import { PageTitle } from '../pageTitle';

class SignIn extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-in">
                <PageTitle className="sign-in__page-title" title="Login"/>
                <SignInForm  className="sign-in__form" onSubmit={ this.onSubmit } />
            </div>
        );
    }
}

export default SignIn;