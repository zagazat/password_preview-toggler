import React, {Component} from 'react';
import './styles/password-widget.css';

class PasswordWidget extends Component {
    constructor(props) {
        super(props)
    }

    passwordToggle = e => {
        const input = document.getElementById('password');

        switch (input.type) {
            case "text":
                e.target.classList.remove('show');
                return input.type = 'password';

            case "password":
                e.target.classList.add('show');
                return input.type = 'text';

        }
    };

    render() {
        const {input} = this.props;
        return (
            <div className="form-field">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...input} />
                <span className="hint" onClick={this.passwordToggle} />
            </div>
        )
    }
}

export default PasswordWidget;
