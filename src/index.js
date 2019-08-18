import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Login from './components/Login';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

//MIDDLEWARE
const middleware = [thunk]

//STORE
const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(<Provider store={store}><Login /></Provider>, document.getElementById('root'));
