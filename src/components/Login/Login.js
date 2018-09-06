import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/style.css'
import Navbar from '../Dashboard/Navbar';

class Daftar extends Component {
    render() {
        return (
            <div>

                < Navbar />

                <div className="bg-grey">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 centered">
                                <div class="box-daftar">
                                    <h1>MASUK</h1>
                                    <p>Isi data kamu di bawah dengan lengkap.</p>
                                    <div class="form-group">
                                        <form action="">
                                            <div class="input-group">
                                                <label htmlFor="email" class="label-tag">Email
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="text" id="email" />
                                            </div>
                                            <div class="input-group">
                                                <label htmlFor="password" class="label-tag">Password
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="text" id="password" />
                                            </div>
                                            <button class="button btn-oren btn-masuk">Masuk</button>
                                        </form>
                                    </div>
                                    <div class="bottom">
                                        <Link to='/daftar' class="register hidden-xs">Tidak punya akun?</Link>
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
