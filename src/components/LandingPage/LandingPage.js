import React, { Component } from 'react'
import '../../assets/css/owl.carousel.min.css'
import '../../assets/css/owl.theme.default.min.css'
import '../../assets/css/style.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class LandingPage extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
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
                                                <h6 className="txt-grey h6">Penutupan pendaftaran</h6>
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
                                                <h6 className="txt-grey h6">Pertandingan Grup</h6>
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
                                                <h6 className="txt-grey h6">Pertandingan Final</h6>
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
                        <div className="">
                        <Slider {...settings}>
                        <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/novii.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">TSBC itu bagian dari keluarga saya.  Bukan hanya sekedar organisasi ekstrakulikuler,  TSBC merupakan tempat untuk membangun solidaritas,  kekompakan,  dan kekeluargaan. Harapan saya  untuk TSBC semoga semakin sukses membuat acara / event yang dapat menciptakan generasi handal dalam dunia basket. </p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Novi Kusumaningayu</h5>
                                                    <h5>Sekolah Tinggi Transportasi Darat</h5>
                                                    <h6>Lulusan Tahun 2015</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/nanda.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Basket adalah sesuatu yang menurut saya nyaman di lakukan. Apalagi bisa bergabung dengan sub organisasi TSBC. Selain basket, kita bisa bersenang bersama2 dengan melakukan hal hal selain basket. Intinya TSBC itu bisa membuat masa masa muda menjadi lebih menarik dan bisa selalu di kenang.</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Nanda Setya Pramudya</h5>
                                                    <h5>Pt Metrosolusi Teknologi Indonesia</h5>
                                                    <h6>Lulusan Tahun 2014</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/bagas.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">MOBA CUP adalah ajang turnamen bola basket SMP/SMPK/MTs.
Saya salah satu panitia MOBA CUP sebelumnya merasa sangat senang dan bangga bahwa kami bisa menampung bakat minat para pemain basket tingkat SMP/SMPK/MTs. 

Sangat hebat dan keren.
SUKSES TERUS MOBA CUP 2K18</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Bagas Try Ambodo</h5>
                                                    <h5>PT. WAHANA MAKMUR SEJATI</h5>
                                                    <h6>Lulusan Tahun 2018</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/hanna.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">SMK TELKOM dengan disiplin ATTITUDE IS EVERYTHING bener bener mendidik saya dalam hal bermasyarakat. Karena yg dibutuhkan tidak hanya otak yg cerdas tapi sikap yg benar dlm menghadapi dunia kerja. Last but not least, SPBC IS FAMILY! Kami masih saling komunikasi, main bareng sampek sekarang.</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Hanna Anie Sharlene Rayitno Soebari</h5>
                                                    <h5>PT. Alur Pelayaran Barat Surabaya</h5>
                                                    <h6>Lulusan Tahun 2013</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/chofifah.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">SMK Telkom Malang sangatlah menyenangkan apalagi kita disini mempelajari IT, disini kita juga diajarkan kekeluargaan, khususnya dengan TSBC, bukan hanya basket, tetapi pentingnya akan kekeluargaan pun kita terapkan dengan melakukan kegiatan sosial. TSBC terbuka untuk siapapun💙 SADUTI TEAMWORK!!</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Chofifah Rahmatullaili Setiawati</h5>
                                                    <h5>Universitas Brawijaya</h5>
                                                    <h6>Lulusan Tahun 2018</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/jody.jpeg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Sekolah di SMK Telkom punya banyak keuntungan. Terutama bagi kamu yang dari luar kota sehingga bisa belajar hidup mandiri dan explore segala hal. Jangan cuma belajar formal tapi ikut juga kegiatan non formal. Basket salah satunya jadi organisasi favorit di moklet, karena organisasi ini mengajarkan kekelurgaan 🔥</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>jody baharizki</h5>
                                                    <h5>Emmh Snack Indonesia</h5>
                                                    <h6>Lulusan Tahun 2013</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/anggi.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Saya sangat senang dan bangga menjadi lulusan dari SMK TELKOM. salah satu alasan saya, bergabungnya saya dengan TSBC. Berkat TSBC saya mendapat teman yang banyak, dan juga easy going. Kekeluargaan di TSBC ini sangat erat. Pokoknya saya sangat beruntung dengan TSBC. UNFORGETABLE!!!</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>ANGGI LISDAYANTI</h5>
                                                    <h5>PT. Wahana Makmur Sejati</h5>
                                                    <h6>Lulusan Tahun 2017</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/iqbal.jpg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Sekolah ini yang mengajarkan apa artinya disiplin dan menghargai waktu. Dan sub organ TSBC yang mengajarkan tidak ada teman, senior ataupun junior, disini semuanya keluarga, tanpa ada perbedaan. Kalian yang ingin mencari pengalaman baru, keluarga baru, dan kesuksesan disini adalah jembatan nya.</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Muhamad Miftahul Iqbal Albana</h5>
                                                    <h5>PT. Telkom Akses</h5>
                                                    <h6>Lulusan Tahun 2018</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/lahoya.jpeg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Terima kasih saya ucapkan kepada SMK Telkom Malang karena sudah mengajarkan keterampilan akademis dan non akademis yang sangat berguna. Disamping itu, teman-teman dari berbagai daerah serta ikatan alumni Wikusama sangat berperan penting setelah lulus dari SMK Telkom Malang.  Salam, 1 2 3 Teamwork!</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Muhammad Lahoya Bagaskara</h5>
                                                    <h5>Angkasa Pura I - I Gusti Ngurah Rai</h5>
                                                    <h6>Lulusan Tahun 2012</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="box-image">
                                            <div className="box-header">
                                                <div className="avatar">
                                                    <img src={require("../../assets/img/alumni/julius.jpeg")} alt="" />
                                                </div>
                                            </div>
                                            <div className="box-body">
                                                <div className="body-content">
                                                    <p className="text-center">Pengalaman menjadi bagian dari SPBC (TSBC) adalah kekeluargaan yang sangat erat di dalam maupun di luar lapangan. Selain berlatih, kami juga saling berbagi pengalaman, karena siswa SMK Telkom Malang yang berasal dari berbagai daerah di seluruh Indonesia. This famous family comunity, we love SPBC</p>
                                                </div>
                                                <div className="profil text-center text-capitalize">
                                                    <h5>Julius dwi</h5>
                                                    <h5>Malang</h5>
                                                    <h6>Lulusan Tahun 2015</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
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
