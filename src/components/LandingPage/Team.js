import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/css/group.css';
import Navbar from '../Common/Navbar';
import { withRouter } from 'react-router-dom';

export class Team extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div>
        < Navbar />
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

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Team))
