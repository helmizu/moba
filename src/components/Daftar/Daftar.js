import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import Navbar from '../Common/Navbar';
import { registerUser } from '../../actions/globalAction';

export class Daftar extends Component {
    static propTypes = {
        registerUser : PropTypes.func.isRequired,
    }
    
    constructor() {
        super()
        this.state = {
            email : '',
            sekolah : '',
            kategori : '',
            phone : '',
            password : '',
            konfirmasi : '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault()
        
        const data = {
            email : this.state.email,
            sekolah : this.state.sekolah,
            kategori : this.state.kategori,
            phone : this.state.phone,
            password : this.state.password
        }
        if(data.password !== this.state.konfirmasi) {
            return window.alert('Password dan Konfirmasi Password Tidak Cocok')
        }
        else {
            this.props.registerUser(data, this.props.history)
        }
    }

    componentDidMount = () => {
        if(localStorage.jwToken){
            this.props.history.push('/dashboard')
        }
    }

    render() {
        const {email, sekolah, kategori, phone, password, konfirmasi } = this.state
        return (
            <div>
            < Navbar />
            <div className="bg-grey">
            <div className="container">
            <div className="row">
            <div className="col-md-12 centered">
            <div className="box-daftar">
            <h1>DAFTAR</h1>
            <p>Form Pendaftaran Basket 5 x 5</p>
            <div className="form-group">
            <form onSubmit={this.onSubmit}>
            <div className="input-group">
            <label htmlFor="email" className="label-tag">Email
            <span className="required">*</span>
            </label>
            <input required type="text" id="email" name="email" value={email} onChange={this.onChange}/>
            </div>
            <div className="input-group">
            <label htmlFor="nama sekolah" className="label-tag">Nama Sekolah
            <span className="required">*</span>
            </label>
            <input required type="text" id="sekolah" name="sekolah" value={sekolah} onChange={this.onChange}/>
            </div>
            <div className="input-group">
            <label htmlFor="phone" className="label-tag">No. Handphone
            <span className="required">*</span>
            </label>
            <input required type="number" id="phone" name="phone" value={phone} onChange={this.onChange}/>
            </div>
            <div className="input-group">
            <label htmlFor="kategori" className="label-tag">Kategori
            <span className="required">*</span>
            </label>
            <select required name="kategori" value={kategori} onChange={this.onChange} id="kategori">
            <option value="" disabled selected></option>
            <option value="tim putra">Tim Putra</option>
            <option value="tim putri">Tim Putri</option>
            </select>
            </div>
            <div className="input-group">
            <label htmlFor="password" className="label-tag">Password
            <span className="required">*</span>
            </label>
            <input required type="password" id="password" name="password" value={password} onChange={this.onChange}/>
            </div>
            <div className="input-group">
            <label htmlFor="konfirmasi" className="label-tag">Konfirmasi Password
            <span className="required">*</span>
            </label>
            <input required type="password" id="konfirmasi" name="konfirmasi" value={konfirmasi} onChange={this.onChange}/>
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
    registerUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Daftar))
