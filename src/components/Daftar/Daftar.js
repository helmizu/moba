import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import Navbar from '../Common/Navbar';

export class Daftar extends Component {
  static propTypes = {
    prop: PropTypes
  }

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
                                         <input required type="text" id="email" name="email"/>
                                     </div>
                                     <div className="input-group">
                                         <label htmlFor="nama sekolah" className="label-tag">Nama Sekolah
                             <span className="required">*</span>
                                         </label>
                                         <input required type="text" id="sekolah" name="sekolah"/>
                                     </div>
                                     <div className="input-group">
                                         <label htmlFor="sekolah" className="label-tag">No. Handphone
                             <span className="required">*</span>
                                         </label>
                                         <input required type="number" id="hp" name="hp"/>
                                     </div>
                                     <div className="input-group">
                                         <label htmlFor="kategori" className="label-tag">Kategori
                             <span className="required">*</span>
                                         </label>
                                         <select required name="kategori" id="kategori">
                                             <option disabled selected></option>
                                             <option value="putra">Tim Putra</option>
                                             <option value="putri">Tim Putri</option>
                                         </select>
                                     </div>
                                     <div className="input-group">
                                         <label htmlFor="password" className="label-tag">Password
                             <span className="required">*</span>
                                         </label>
                                         <input required type="password" id="password" name="password"/>
                                     </div>
                                     <div className="input-group">
                                         <label htmlFor="konfirmasi" className="label-tag">Konfirmasi Password
                             <span className="required">*</span>
                                         </label>
                                         <input required type="password" id="konfirmasi" name="konfirmasi"/>
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
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Daftar))
