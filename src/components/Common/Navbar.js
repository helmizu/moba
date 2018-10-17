import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../../actions/globalAction'

export class Navbar extends Component {
    static propTypes = {
        global: PropTypes.object.isRequired,
        logoutUser : PropTypes.func.isRequired
    }
    
    constructor() {
        super()     
        this.logoutHandler = this.logoutHandler.bind(this)
    }
    
    logoutHandler () {
        this.props.logoutUser()
    }
    
    render() {
        const { isLogedIn } = this.props.global
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar team">
            <Link className="navbar-brand" to="/"><img src={require("../../assets/img/ts-2.png")} width="15%" alt="telkom"/></Link>
            <ul className="navbar-nav ml-auto">{ isLogedIn ? (
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
            ) : '' }
            {/* <li className="nav-item">
                <Link className="nav-link" to="/team">Team</Link>
            </li> */}
            { isLogedIn ? (
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
            ) : '' }
            <li className="nav-item">
            { isLogedIn ? <a className="nav-link" onClick={this.logoutHandler}>Logout</a> : <Link className="nav-link" to="/login">Login</Link> }
            </li>
            </ul>
            </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    global : state.global
})

const mapDispatchToProps = {
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
