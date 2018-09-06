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
                                    <h1>DAFTAR</h1>
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
                                            <div class="input-group">
                                                <label htmlFor="konfirmasi" class="label-tag">Konfirmasi Password
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="text" id="konfirmasi" />
                                            </div>
                                            <div class="input-group">
                                                <label htmlFor="nama sekolah" class="label-tag">Nama Sekolah
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="text" id="sekolah" />
                                            </div>
                                            <div class="input-group">
                                                <label htmlFor="sekolah" class="label-tag">No. Handphone
                                    <span class="required">*</span>
                                                </label>
                                                <input required type="number" id="hp" />
                                            </div>
                                            <div class="input-group">
                                                <label htmlFor="no" class="label-tag">Kategori
                                    <span class="required">*</span>
                                                </label>
                                                <select required name="kategori">
                                                    <option disabled selected></option>
                                                    <option value="putra">Tim Putra</option>
                                                    <option value="putri">Tim Putri</option>
                                                </select>
                                            </div>
                                            <button class="button btn-oren btn-masuk">Daftar</button>
                                        </form>
                                    </div>
                                    <div class="bottom">
                                        <Link to='/login' class="register hidden-xs">Sudah punya akun?</Link>
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
