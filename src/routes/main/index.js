import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PasswordWidget from '../../components/form/PasswordWidget';
import TextInput from '../../components/form/TextInput';
import './index.css';

class LoginForm extends React.Component {

    handleSubmit = values => {
        console.log(values)
    };

    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <form method="POST" onSubmit={handleSubmit(this.handleSubmit)}>
                <Field component={TextInput} name="username" />
                <Field component={PasswordWidget} name="password" />
                <div className="form-submit">
                    <input type="submit" value="Send"/>
                </div>
            </form>
        )
    };
}

LoginForm = reduxForm({
    form: 'login',
    enableReinitialize: true
})(LoginForm);

export default LoginForm;
