import React, { Component } from 'react'
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/owl.theme.default.min.css'
import '../../assets/css/style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light landing">
                    <a className="navbar-brand" href="#"><img src={require("../../assets/img/ts-2.png")} width="15%"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item activeNavLanding">
                                <Link className="nav-link" to="/">Home
                        <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="bg-video">
                    <div className="section-video">
                    </div>
                </div>

                <div className="bg-inner-video">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-md-3 video-gambar">
                                <img src={require("../../assets/img/Log2o-01.png")} className="img-fluid" alt="Responsive image" />
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-12">
                                <h1 className="text-center text-light text-uppercase title1">moba cup 2k18</h1>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-12">
                                <h1 className="text-center text-light text-capitalize title2">kompetisi basketball se-jatim</h1>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 text-center">
                                <button href="#" className="btn btn-daftar text-light">Daftar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section1">
                    <img src={require("../../assets/img/motif1.png")} className="motif1" alt="" width="100%" />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center-xs">
                                <img src={require("../../assets/img/model.png")} className="img-fluid basket-person" alt="Responsive image" />
                            </div>
                            <div className="col-md-6">
                                <div className="judul">
                                    <h3>MOBA CUP 2018</h3>
                                    <h4>THE GOLDEN HOPE</h4>
                                </div>
                                <div className="paragraf">

                                    <p>Dalam penyaluran bakat siswa-siswi di bidang olahraga khususnya bolabasket, SMK Telkom turut berpartisipasi untuk mengadakan kompetisi bolabasket antar SMP/MTs sederajat dengan nama MOBA CUP (Moklet Basketball Cup). MOBA CUP pertama kali diadakan pada tahun 2017 dan telah diikuti oleh 20 tim yang tersebar di 6 kota di Jawa Timur diantaranya kota Lumajang, Pasuruan, Kabupaten Malang, Kota Malang, Blitar dan Tulungagung.</p>
                                <p> Untuk melanjutkan kegiatan tersebut, kini SMK Telkom Malang merealisasikan sebuah turnamen bolabasket bernama MOBA CUP 2018 “The Golden Hope” untuk siswa-siswi tingkat SMP/MTs/sederajat di Provinsi Jawa Timur. Melalui turnamen ini, diharapkan seluruh siswa  tingkat SMP/MTs/sederajat di Provinsi Jawa Timur dapat ikut serta secara aktif menyalurkan bakat mereka di bidang olahraga, yaitu bolabasket. Nantinya, para peserta turnamen ini akan direkomendasikan agar dapat bergabung untuk melanjutkan studi dan menjadi anggota keluarga Wikusama (ikatan alumni SMK Telkom Malang) untuk meneruskan ukiran prestasi berikutnya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section2">
                    <img src={require("../../assets/img/motif2.png")} className="img-fluid motif2" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="text-center judulHadiah brandon">HADIAH</h4>
                                <div className="hadiah">
                                    <div className="detail-hadiah">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src={require("../../assets/img/PialaMoba_Putra1.png")} className="img-fluid" alt="" />
                                                <h5 className="text-center txt-juara">Juara 1</h5>
                                                <h6 className="text-center txt-grey">Rp.X.X00.000</h6>
                                                <h6 className="text-center txt-grey">Sertifikat</h6>
                                                <h6 className="text-center txt-grey">Trophy</h6>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={require("../../assets/img/PialaMoba_Putra2.png")} className="img-fluid" alt="" />
                                                <h5 className="text-center txt-juara">Juara 2</h5>
                                                <h6 className="text-center txt-grey">Rp.X.X00.000</h6>
                                                <h6 className="text-center txt-grey">Sertifikat</h6>
                                                <h6 className="text-center txt-grey">Trophy</h6>
                                            </div>
                                            <div className="col-md-4">
                                                <img src={require("../../assets/img/PialaMoba_Putra3.png")} className="img-fluid" alt="" />
                                                <h5 className="text-center txt-juara">Juara 3</h5>
                                                <h6 className="text-center txt-grey">Rp.X.X00.000</h6>
                                                <h6 className="text-center txt-grey">Sertifikat</h6>
                                                <h6 className="text-center txt-grey">Trophy</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="text-center jadwal brandon">JADWAL</h4>
                                <div className="timeline">
                                    <div className="row timeline_item">
                                        <div className="col-md-4 text-center">
                                            <div className="timeline_item_icon text-center"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="timeline_single">
                                                <h6>8 September 2018</h6>
                                                <h6 className="txt-grey h6">Pembukaan pendaftaran</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row timeline_item">
                                        <div className="col-md-4 text-center">
                                            <div className="timeline_item_icon text-center"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="timeline_single">
                                                <h6>8 Oktober 2018</h6>
                                                <h6 className="txt-grey h6">Pembukaan pendaftaran</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row timeline_item">
                                        <div className="col-md-4 text-center">
                                            <div className="timeline_item_icon text-center"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="timeline_single">
                                                <h6>13 Oktober 2018</h6>
                                                <h6 className="txt-grey h6">Pembukaan pendaftaran</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row timeline_item">
                                        <div className="col-md-4 text-center">
                                            <div className="timeline_item_icon text-center"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="timeline_single">
                                                <h6>28 Oktober 2018</h6>
                                                <h6 className="txt-grey h6">Pembukaan pendaftaran</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section3">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center galeri brandon">GALERI</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="box-galery col-md-12">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-3">
                                        <img src={require("../../assets/img/IMG_6166.JPG")} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section4">
                    <img src={require("../../assets/img/motif3.png")} className="img-fluid motif3" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center brandon testimoni">TESTIMONI ALUMNI</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/dan.jpeg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                                <div className="profil text-center">
                                                    <h5>Dandy Santoso</h5>
                                                    <h6>Alumni Angkatan XXIII</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/dan.jpeg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                                <div className="profil text-center">
                                                    <h5>Dandy Santoso</h5>
                                                    <h6>Alumni Angkatan XXIII</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/dan.jpeg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                                <div className="profil text-center">
                                                    <h5>Dandy Santoso</h5>
                                                    <h6>Alumni Angkatan XXIII</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center brandon sponsor">SPONSORED BY</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section6">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 gradient-footer"></div>
                            <div className="col-md-6 gradient-footer"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 justify-content-md-center">
                                <div className="footer-sekolah text-center">
                                    <h5>SMK TELKOM MALANG</h5>
                                    <h6>Jl. Danau Ranau No.1 Malang</h6>
                                    <a href="">View On Map</a>
                                </div>
                                <div className="footer-telepon text-center">
                                    <h5>0341-72500</h5>
                                </div>
                                <div className="footer-socmed text-center">
                                    <a href="">
                                        <span>
                                            <img src="assets/img/instagram.png" alt="" className="img-fluid fa fa-ig" />
                                        </span>
                                    </a>
                                    <a href="">
                                        <span>
                                            <img src="assets/img/Youtube-icon.png" alt="" className="img-fluid fa fa-yt" />
                                        </span>
                                    </a>
                                    <a href="">
                                        <span>
                                            <img src="assets/img/email.png" alt="" className="img-fluid fa fa-email" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
