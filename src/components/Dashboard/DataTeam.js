import React, { Component } from 'react';

class DataTeam extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-8 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Data Tim</h3>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">
                            Pelatih
                            <span className="btn btn-default" onClick={() => this.props.modalToggle('Pelatih')}>Tambah <i className="fa fa-plus"></i>
                            </span>
                        </h3>
                
                        <div className="comment-body">
                            <div className="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="user-id"> <img src={require('../../assets/img/rectangle2.png')} alt="sertifikat" className="" />
                            </div>
                            <div className="mail-contnet">
                                <h5>Nama Coach</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Manajemen <span className="btn btn-default" onClick={() => this.props.modalToggle('Manajemen')} >Tambah <i className="fa fa-plus"></i></span></h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="mail-contnet">
                                <h5>Nama Coach</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Guru Pendamping<span className="btn btn-default" onClick={() => this.props.modalToggle('Guru')}>Tambah <i className="fa fa-plus"></i></span></h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="mail-contnet">
                                <h5>Nama Coach</h5>
                            </div>
                        </div>
                    </div>

                    <div className="comment-center p-t-10">
                        <h3 className="comment-title">Pemain <span className="btn btn-default" onClick={() => this.props.modalToggle('Pemain')}>Tambah <i className="fa fa-plus"></i></span></h3>
                        <div className="comment-body">
                            <div className="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                className="img-circle" />
                            </div>
                            <div className="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" className="" />
                            </div>
                            <div className="mail-contnet">
                                <h5>Nama Pemain</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default DataTeam;
