import React, { Component } from 'react';
import SignInForm from './signInForm';

class SignIn extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-in'>
                <SignInForm  className="sign-in__form" onSubmit={ this.onSubmit } />
            </div>
        );
    }
}

export default SignIn;