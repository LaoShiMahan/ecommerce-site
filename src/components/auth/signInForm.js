import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: "Not registered? Create account here",
                onClick: () => history.push("/signup")
            },
            {
                _id: 1,
                title: "Forgot account email?",
                onClick: () => console.log("Sorry, this link is under construction")
            },
            {
                _id: 2,
                title: "Forgot password?",
                onClick: () => console.log("Sorry, this link is under construction")
            }
        ]
        return (
            <form
                className={`${ className } sign-in-form`}
                onSubmit={ handleSubmit }
            >
                <Field
                    className="sign-in-form__email"
                    type="email"
                    title="Email"
                    placeholder="Email"
                    name="email"
                    component={ FormInput }
                />
                <Field
                    className="sign-in-form__password"
                    type="password"
                    title="Password"
                    placeholder="Password"
                    name="password"
                    component={ FormInput }
                />
                <div className="sign-in-form__line"></div>
                <Field
                    className="sign-in-form__login"
                    onClick={ () => history.push("/account") }
                    type="submit"
                    title="Login"
                    name="login"
                    component={ FormButton }
                />
                <Details className="sign-in-form__details" title="QuickLinks" links={ links } />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;