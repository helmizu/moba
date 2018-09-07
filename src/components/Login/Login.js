import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import Navbar from '../Common/Navbar';

export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div>
        < Navbar />
        <div className="bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 centered">
                        <div className="box-daftar">
                            <h1>MASUK</h1>
                            <p>Isi data kamu di bawah dengan lengkap.</p>
                            <div className="form-group">
                                <form action="">
                                    <div className="input-group">
                                        <label htmlFor="email" className="label-tag">Email
                            <span className="required">*</span>
                                        </label>
                                        <input required type="text" id="email" name="email" />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="password" className="label-tag">Password
                            <span className="required">*</span>
                                        </label>
                                        <input required type="password" id="password" name="password" />
                                    </div>
                                    <button className="button btn-oren btn-masuk">Masuk</button>
                                </form>
                            </div>
                            <div className="bottom">
                                <Link to='/daftar' className="register hidden-xs">Tidak punya akun?</Link>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
