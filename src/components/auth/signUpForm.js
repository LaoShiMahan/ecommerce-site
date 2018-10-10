import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const infos = [
            {
                _id: 0,
                title: "At least 6 characters"
            },
            {
                _id: 1,
                title: "At least one number"
            },
            {
                _id: 2,
                title: "At least one symbol"
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
                    className="sign-up-form__confirm"
                    type="password"
                    title="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirm"
                    component={ FormInput }
                />
                <div className="sign-up-form__line"></div>
                <Field
                    className="sign-up-form__back"
                    onClick={ () => history.push("/signin") }
                    type="button"
                    title="Back"
                    name="back"
                    component={ FormButton }
                    short={ true }
                />
                <Field
                    className="sign-up-form__create"
                    onClick={ () => history.push("/account") }
                    type="submit"
                    title="Create Account"
                    name="create"
                    component={ FormButton }
                />
                <Details className="sign-up-form__details" title="Password requirements" infos={ infos } />
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'SignUp'
})(SignUpForm);

export default SignUpForm;