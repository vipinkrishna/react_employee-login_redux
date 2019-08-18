//LOGIN

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import * as actions from '../reducer/actions'
import './Login.scss'

class Login extends Component {
    render() {
        const Login = <form className="Login" onSubmit={this.props.handleLogin}>
                        <input name="username" placeholder="UserName" onChange={this.props.handleChange}/>
                        <input name="password" placeholder="Password" type="password" onChange={this.props.handleChange}/>
                        <button>Login</button>
                      </form>
        return (
            <>
                {!this.props.loggedIn && Login}
                {this.props.error && <div className="Error">{this.props.error}</div>}
                {this.props.loggedIn && <Dashboard/>}
            </>
        )
    }
}

const handleChange = (e) => ({
    type: actions.SET_STATE, payload: {[e.target.name]: e.target.value}
})

const handleLogin = (e) => {
    e.preventDefault()
    return (dispatch, getState) => {
        const state = getState()
        if(state.username === state.originalUsername && state.password === state.originalPassword) {
            dispatch({
                type: actions.SET_STATE,
                payload: {loggedIn: true, username: "", password: ""}
            })
        } else {
            dispatch({
                type: actions.SET_STATE,
                payload: {loggedIn: false, error: "Invalid Credentials!"}
            })
            setTimeout(() => {dispatch({type: actions.SET_STATE, payload: {error: null}})}, 3000)
        }
    }

}

//MAP STATE TO PROPS
const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn,
    error: state.error
})

//MAP DISPATCH TO PROPS
const mapDispatchToProps = {
    handleChange: handleChange,
    handleLogin: handleLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)