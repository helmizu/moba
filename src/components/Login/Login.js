import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../../assets/css/style.css'
import Navbar from '../Dashboard/Navbar'

class Daftar extends Component {
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
                                                <input required type="text" id="email" />
                                            </div>
                                            <div className="input-group">
                                                <label htmlFor="password" className="label-tag">Password
                                    <span className="required">*</span>
                                                </label>
                                                <input required type="text" id="password" />
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
        );
    }
}

export default Daftar;
