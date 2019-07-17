import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextInputWidget from "../forms/widgets/TextInputWidget";
import PasswordWidget from "../forms/widgets/PasswordWidget";
import SubmitWidget from "../forms/widgets/SubmitWidget";
import './index.css';


class LoginForm extends React.Component {

    handleSubmit = values => {
        console.log(values)
    };

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <form method="POST" onSubmit={handleSubmit(this.handleSubmit)}>
                <Field component={TextInputWidget} name="username" />
                <Field component={PasswordWidget} name="password" />
                <Field component={SubmitWidget} name="submit" />
            </form>
        )
    };
}

LoginForm = reduxForm({
    form: 'login',
    enableReinitialize: true
})(LoginForm);

export default LoginForm;
