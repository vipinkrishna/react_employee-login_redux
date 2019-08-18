//DASHBOARD

import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../reducer/actions'
import './Dashboard.scss'

class Dashboard extends Component {
    render() {
        const tBody = this.props.users.map(user => (<tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.age}</td><td>{user.email}</td><td>{user.phone}</td></tr>))
        return (
            <>
                <div className="EmployeeList">
                    <table className="Table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tBody}
                        </tbody>
                    </table>
                </div>
                <div className="Logout">
                    <button type="button" onClick={this.props.handleLogout}>Logout</button>
                </div>
            </>
        )
    }
}

const handleLogout = () => {
    return {
        type: actions.SET_STATE,
        payload: {loggedIn: false}
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = {
    handleLogout: handleLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)