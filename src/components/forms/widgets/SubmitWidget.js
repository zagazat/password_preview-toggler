import React, {Component} from 'react';
import './styles/submit-widget.css';


class SubmitWidget extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className="form-field">
                <button type="submit">Login</button>
            </div>
        )
    }
}

export default SubmitWidget;
