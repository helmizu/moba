import React, { Component } from 'react';

class DataTeam extends Component {
    render() {
        return (
            <div class="col-md-12 col-lg-8 col-sm-12">
                <div class="white-box">
                    <h3 class="box-title">Data Tim</h3>

                    <div class="comment-center p-t-10">
                        <h3 class="comment-title">Pelatih <span onClick={() => this.props.modalToggle('Pelatih')}><i class="fa fa-plus"></i></span></h3>
                        <div class="comment-body">
                            <div class="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                class="img-circle" />
                            </div>
                            <div class="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" class="" />
                            </div>
                            <div class="user-id"> <img src={require('../../assets/img/rectangle2.png')} alt="sertifikat" class="" />
                            </div>
                            <div class="mail-contnet">
                                <h5>Nama Coach</h5>
                            </div>
                        </div>
                    </div>

                    <div class="comment-center p-t-10">
                        <h3 class="comment-title">Manajemen <span onClick={() => this.props.modalToggle('Manajemen')} ><i class="fa fa-plus"></i></span></h3>
                        <div class="comment-body">
                            <div class="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                class="img-circle" />
                            </div>
                            <div class="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" class="" />
                            </div>
                            <div class="mail-contnet">
                                <h5>Nama Coach</h5>
                            </div>
                        </div>
                    </div>

                    <div class="comment-center p-t-10">
                        <h3 class="comment-title">Guru Pendamping<span onClick={() => this.props.modalToggle('Guru')}><i class="fa fa-plus"></i></span></h3>
                        <div class="comment-body">
                            <div class="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                class="img-circle" />
                            </div>
                            <div class="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" class="" />
                            </div>
                            <div class="mail-contnet">
                                <h5>Nama Coach</h5>
                            </div>
                        </div>
                    </div>

                    <div class="comment-center p-t-10">
                        <h3 class="comment-title">Pemain <span onClick={() => this.props.modalToggle('Siswa')}><i class="fa fa-plus"></i></span></h3>
                        <div class="comment-body">
                            <div class="user-img"> <img src={require('../../assets/img/2000px-Disc_Plain_grey.svg.png')} alt="pelatih"
                                class="img-circle" />
                            </div>
                            <div class="user-id"> <img src={require('../../assets/img/rectangle.png')} alt="ktp" class="" />
                            </div>
                            <div class="mail-contnet">
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
