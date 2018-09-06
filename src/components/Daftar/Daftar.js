import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../assets/css/style.css'
import Navbar from '../Dashboard/Navbar';

class Daftar extends Component {
    render() {
        return (
            <div>
               
               < Navbar />
               
                <div className="bg-grey">
                    <div clas="container">
                        <div className="row">
                            <div className="col-md-12 centered">
                                <div className="box-daftar">
                                    <h1>DAFTAR</h1>
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
                                            <div className="input-group">
                                                <label htmlFor="konfirmasi" className="label-tag">Konfirmasi Password
                                    <span className="required">*</span>
                                                </label>
                                                <input required type="text" id="konfirmasi" />
                                            </div>
                                            <div className="input-group">
                                                <label htmlFor="nama sekolah" className="label-tag">Nama Sekolah
                                    <span className="required">*</span>
                                                </label>
                                                <input required type="text" id="sekolah" />
                                            </div>
                                            <div className="input-group">
                                                <label htmlFor="sekolah" className="label-tag">No. Handphone
                                    <span className="required">*</span>
                                                </label>
                                                <input required type="number" id="hp" />
                                            </div>
                                            <div className="input-group">
                                                <label htmlFor="no" className="label-tag">Kategori
                                    <span className="required">*</span>
                                                </label>
                                                <select required name="kategori">
                                                    <option disabled selected></option>
                                                    <option value="putra">Tim Putra</option>
                                                    <option value="putri">Tim Putri</option>
                                                </select>
                                            </div>
                                            <button className="button btn-oren btn-masuk">Daftar</button>
                                        </form>
                                    </div>
                                    <div className="bottom">
                                        <Link to='/login' className="register hidden-xs">Sudah punya akun?</Link>
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
