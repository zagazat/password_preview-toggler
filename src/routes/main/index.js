import React from 'react';
import LoginForm from "../../components/login";

class MainPage extends React.Component {

    render() {
        return (
            <div className="main">
                <LoginForm/>
            </div>
        )
    };
}

export default MainPage;
