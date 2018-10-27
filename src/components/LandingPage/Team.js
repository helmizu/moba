import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/css/group.css';
import Navbar from '../Common/Navbar';
import { withRouter } from 'react-router-dom';

export class Team extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
        <div>
        < Navbar />
        <div className="container-fluid">
            <div className="row table-grup">
                <div className="col-md-12">
                    <h3 className="text-center">Daftar Grup</h3>
                </div>
                <div className="col-md-4">
                    <h5>Group A</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>SMPN 1 Tumpang</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>MTsN 1 Malang</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>SMPN 5 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h5>Group B</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>SMPN 1 Blitar</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>SMPN 2 Tulungagung</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>SMPN 21 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h5>Group C</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>SMPN 1 Turen</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>SMPN 14 Malang</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>SMPN 1 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row table-grup">
                <div className="col-md-3">
                    <h5>Group W</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>SMPK Mardiwiyata A</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>SMPK Yos Sudarso</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>MTsN 1 Malang B</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                    <h5>Group X</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>MTsN 1 Malang A</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>SMPN 5 Malang A</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>SMPN 21 Malang B</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                    <h5>Group Y</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>SMPN 21 Malang A</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>SMPK Mardiwiyata C</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>SMPN 1 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                    <h5>Group Z</h5>
                    <table className="table table-bordered putra">
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>Team</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>SMPN 5 Malang B</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>SMPN 1 Blitar</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>SMPN 2 Tulungagung</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>SMPK Mardiwiyata B</td>
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
                <h6>Minggu, 21 Oktober 2018</h6>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 1 Tumpang</td>
                                <td className="tb-center">16 - 33</td>
                                <td className="tb-right">MTsN 1 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">Opening Ceremony</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 1 Turen</td>
                                <td className="tb-center">34 - 05</td>
                                <td className="tb-right">SMPN 14 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                <h6>Sabtu, 27 Oktober 2018</h6>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 14 Malang</td>
                                <td className="tb-center">10 - 50</td>
                                <td className="tb-right">SMPN 1 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">MTsN 1 Malang</td>
                                <td className="tb-center">31 - 26</td>
                                <td className="tb-right">SMPN 5 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 2 Tulungagung</td>
                                <td className="tb-center">22 - 12</td>
                                <td className="tb-right">SMPN 21 Malang</td>
                            </tr>
                        </tbody>
                    </table>
                <h6>Minggu, 28 Oktober 2018</h6>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 5 Malang</td>
                                <td className="tb-center">00 - 00</td>
                                <td className="tb-right">SMPN 1 Tumpang</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 1 Blitar</td>
                                <td className="tb-center">00 - 00</td>
                                <td className="tb-right">SMPN 2 Tulungagung</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 1 Malang</td>
                                <td className="tb-center">00 - 00</td>
                                <td className="tb-right">SMPN 1 Turen</td>
                            </tr>
                        </tbody>
                    </table>
                <h6>Sabtu, 10 November 2018</h6>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">SMPN 21 Malang</td>
                                <td className="tb-center">00 - 00</td>
                                <td className="tb-right">SMPN 1 Blitar</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">3 X 3 - Competion</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">3 X 3 - Competion</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">3 X 3 - Competion</td>
                            </tr>
                        </tbody>
                    </table>
                <h6>Minggu, 10 November 2018</h6>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">Juara Grup B</td>
                                <td className="tb-center">00 - 00</td>
                                <td className="tb-right">Runner Up Terbaik</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">Perfomance</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-left">Juara Grup A</td>
                                <td className="tb-center">00 - 00</td>
                                <td className="tb-right">Juara Grup C</td>
                            </tr>
                        </tbody>
                    </table>
                <h6>Sabtu, 17 November 2018</h6>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">Perebutan Juara 3</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">Perfomance</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table pertandingan">
                        <tbody>
                            <tr>
                                <td className="tb-center">Final Game</td>
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
