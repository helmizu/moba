import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import Navbar from '../Common/Navbar';
import { loginUser } from '../../actions/globalAction';
export class Login extends Component {
    static propTypes = {
        loginUser: PropTypes.func.isRequired,
        global : PropTypes.object.isRequired
    }
    
    constructor(){
        super()
        
        this.state = {
            email : '',
            password : '',
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
            password : this.state.password
        }
        this.props.loginUser(data)
    }
    
    componentWillReceiveProps = (nextProps) => {
      if(this.props.global !== nextProps.global) {
          this.props.history.push('/dashboard')
      }
    }
    
    render() {
        const {email, password} = this.state;
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
            <form onSubmit={this.onSubmit}>
            <div className="input-group">
            <label htmlFor="email" className="label-tag">Email
            <span className="required">*</span>
            </label>
            <input required type="text" id="email" name="email" value={email} onChange={this.onChange} />
            </div>
            <div className="input-group">
            <label htmlFor="password" className="label-tag">Password
            <span className="required">*</span>
            </label>
            <input required type="password" id="password" name="password" value={password} onChange={this.onChange} />
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
    global : state.global
})

const mapDispatchToProps = {
    loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
