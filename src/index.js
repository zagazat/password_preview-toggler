import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './routes/main/';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
// import postProcess from './store/reducers';
import { reducer as forms } from 'redux-form';

const reducers = combineReducers({
    // postProcess,
    form: forms
});

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={LoginForm} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
