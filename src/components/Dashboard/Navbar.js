import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar team">
                    <Link className="navbar-brand" to="/"><img src={require("../../assets/img/ts-2.png")} width="15%"/></Link>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home
                        <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
