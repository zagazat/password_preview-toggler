import React, {Component} from 'react';


class TextInputWidget extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {input} = this.props;
        return (
            <div className="form-field">
                <label htmlFor="login">Login</label>
                <input id="login" type="text"  {...input}/>
            </div>
        )
    }
}

export default TextInputWidget;
