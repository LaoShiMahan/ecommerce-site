import React, { Component } from 'react';
import SignUpForm from './signUpForm';
import { PageTitle } from '../pageTitle';

class SignUp extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-up">
                <PageTitle className="sign-up__page-title" title="Register"/>
                <SignUpForm  className="sign-up__form" onSubmit={ this.onSubmit } />
            </div>
        );
    }
}

export default SignUp;