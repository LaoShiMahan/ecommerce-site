import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignUpForm extends Component {
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
                className={`${ className } sign-up-form`}
                onSubmit={ handleSubmit }
            >
                <Field
                    className="sign-up-form__name"
                    type="name"
                    title="Name"
                    placeholder="Name"
                    name="name"
                    component={ FormInput }
                />
                <Field
                    className="sign-up-form__email"
                    type="email"
                    title="Email"
                    placeholder="Email"
                    name="email"
                    component={ FormInput }
                />
                <Field
                    className="sign-up-form__password"
                    type="password"
                    title="Password"
                    placeholder="Password"
                    name="password"
                    component={ FormInput }
                />
                <Field
                    className="sign-up-form__confirm-password"
                    type="password"
                    title="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirm"
                    component={ FormInput }
                />
                <div className="sign-up-form__line"></div>
                <Field
                    className="sign-up-form__back"
                    onClick={ () => console.log("trying to go back") }
                    type="button"
                    title="Back"
                    name="back"
                    component={ FormButton }
                    short={ true }
                />
                <Field
                    className="sign-up-form__login"
                    onClick={ () => console.log("trying to submit") }
                    type="submit"
                    title="Login"
                    name="login"
                    component={ FormButton }
                />
                <Details className="sign-up-form__details" title="QuickLinks" links={ links } />
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'SignUp'
})(SignUpForm);

export default SignUpForm;