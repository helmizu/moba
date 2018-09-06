import React, { Component } from 'react'
import '../../assets/css/group.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Team extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar team">
                    <a className="navbar-brand" href="#"><img src={require("../../assets/img/ts-2.png")} width="15%"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home
                        <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item activeNavLanding">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row table-grup">
                        <div className="col-md-12">
                            <h3 className="text-center">Daftar Grup</h3>
                        </div>
                        <div className="col-md-3">
                            <h5>Group Putra A</h5>
                            <table className="table table-border putra">
                                <thead>
                                    <tr>
                                        <td>No.</td>
                                        <td>Nama Tim</td>
                                        <td>Point</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <h5>Group Putra A</h5>
                            <table className="table table-border putra">
                                <thead>
                                    <tr>
                                        <td>No.</td>
                                        <td>Nama Tim</td>
                                        <td>Point</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <h5>Group Putra A</h5>
                            <table className="table table-border putra">
                                <thead>
                                    <tr>
                                        <td>No.</td>
                                        <td>Nama Tim</td>
                                        <td>Point</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <h5>Group Putra A</h5>
                            <table className="table table-border putra">
                                <thead>
                                    <tr>
                                        <td>No.</td>
                                        <td>Nama Tim</td>
                                        <td>Point</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>1.</td>
                                        <td>Galapagos</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className="row match">
                        <div className="col-md-12 text-center">
                            <h3>Jadwal dan Hasil pertandingan</h3>
                        </div>
                        <div className="col-md-6" style={{ margin: '0 auto' }}>
                            <table className="table table-border pertandingan">
                                <tbody>
                                    <tr>
                                        <td>Tim A</td>
                                        <td>1</td>
                                        <td>-</td>
                                        <td>0</td>
                                        <td>Tim B</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-border pertandingan">
                                <tbody>
                                    <tr>
                                        <td>Tim A</td>
                                        <td>1</td>
                                        <td>-</td>
                                        <td>0</td>
                                        <td>Tim B</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-border pertandingan">
                                <tbody>
                                    <tr>
                                        <td>Tim A</td>
                                        <td>1</td>
                                        <td>-</td>
                                        <td>0</td>
                                        <td>Tim B</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
