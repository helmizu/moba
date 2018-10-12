import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { logoutUser } from '../../actions/globalAction'

export class LandingPage extends Component {
  static propTypes = {
    global: PropTypes.object.isRequired
  }
  constructor() {
    super()
    this.state = {
        testiArya : false,
        testiDiky : false
    }
    this.logoutHandler = this.logoutHandler.bind(this)
    this.dikyHandler = this.dikyHandler.bind(this)
    this.aryaHandler = this.aryaHandler.bind(this)
    }

    logoutHandler () {
        this.props.logoutUser()
    }

    dikyHandler = () => {
        this.setState({
            testiDiky : !this.state.testiDiky
        })
    }

    aryaHandler = (e) => {
        this.setState({
            testiArya : !this.state.testiArya
        })
    }

    componentDidMount = () => {
        if(localStorage.jwToken){
            this.props.history.push('/dashboard')
        }
    }

  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad : true
    };
    const { isLogedIn } = this.props.global
    const arya = "Hai... saya Arya peserta MOBA CUP 2017. Saat itu saya membela tim SMPN 3 Lumajang. MOBA CUP itu seru banget, menambah pengalaman bermain bersama tim-tim besar dari daerah lain, kita bisa mengevaluasi apa kekurangan dan kelebihan dari tim kita. Setelah ikut MOBA CUP saya tertarik untuk bersekolah di SMK Telkom Malang. Rasanya sangat bangga dan senang ketika di terima, apalagi di SMK TELKOM itu pengumumannya sebelum UN muncul jadi kita enggak bingung bingung lagi untuk cari sekolah. Di SMK Telkom Malang itu seru banget, kita bakalan mempunyai teman baru yang berbagai asal, kita juga bisa belajar bahasa yang belum kita ketahui dan kita dapat mempunyai keluarga baru, apalagi jadi bagian keluarga basket TSBC wah serasa kita punya keluarga yang membuat saya SMK TELKOM MALANG dan TSBC itu seperti rumah sendiri, di TSBC juga mengajarkan saya tentang berbagi terhadap sesama dan bersosialisasi selain bermain Basket."
    const diky = "Saya adalah salah satu peserta pada MobaCup 2017 saat itu saya membela SMPN 18 Malang. Menurut saya MobaCup 2017 adalah event yang paling seru dari pada event lain. Pengalaman ini  sangat mengesankan dan menyenangkan yang pernah saya alami saat mengikuti kompetisi basket ini, karena banyaknya tim-tim bagus yang hadir selain itu saya jadi nominasi pemain favorit MOBACUP. Konsep acaranya pun sangat baik, apalagi dengan adanya selingan pengisi acara waktu istirahat yang membuat peserta tidak bosan. MOBA CUP sendiri menurut saya event paling bergengsi dan paling banyak diminati SMP-SMP lain karena nominal hadiahnya yang cukup besar dan menjadikan saya dan tim-tim lain termotivasi untuk juara. Saya sangat bersyukur setelah ikut MOBA CUP saya direkomendasikan untuk masuk SMK Telkom Malang. Akhirnya saya bersekolah di SMK Telkom malang dan bergabung dengan tim Basketnya yg bernama TSBC yang ternyata teman-temannya seru abis dan udah seperti keluarga sendiri."
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light landing">
                <Link className="navbar-brand" to="/"><img src={require("../../assets/img/ts-2.png")} width="15%" alt="telkom school" /></Link>   
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/team">Team</Link>
                        </li> */}
                        { isLogedIn ? (
                            <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        ) : '' }
                        <li className="nav-item">
                        { isLogedIn ? <a className="nav-link" onClick={this.logoutHandler}>Logout</a> : <Link className="nav-link" to="/login">Login</Link> }
                        </li>
                    </ul>
            </nav>

            <div className="bg-video">
                <div className="section-video">
                </div>
            </div>

            <div className="bg-inner-video">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-3 video-gambar">
                            <img src={require("../../assets/img/Log2o-01.png")} className="img-fluid" alt="Responsive" />
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
                            <Link to="/daftar" className="btn btn-daftar text-light">Daftar</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section1">
                <img src={require("../../assets/img/motif1.png")} className="motif1" alt="" width="100%" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center-xs">
                            <img src={require("../../assets/img/model.png")} className="img-fluid basket-person" alt="Basket" />
                        </div>
                        <div className="col-md-6">
                            <div className="judul">
                                <h3>MOBA CUP 2018</h3>
                                <h4>THE GOLDEN HOPE</h4>
                            </div>
                            <div className="paragraf text-justify">

                                <p>Dalam penyaluran bakat siswa-siswi di bidang olahraga khususnya bolabasket, SMK Telkom turut berpartisipasi untuk mengadakan kompetisi bolabasket antar SMP/MTs sederajat dengan nama MOBA CUP (Moklet Basketball Cup). MOBA CUP pertama kali diadakan pada tahun 2017 dan telah diikuti oleh 20 tim yang tersebar di 6 kota di Jawa Timur diantaranya kota Lumajang, Pasuruan, Kabupaten Malang, Kota Malang, Blitar dan Tulungagung.</p>
                                <p> Untuk melanjutkan kegiatan tersebut, kini SMK Telkom Malang merealisasikan sebuah turnamen bolabasket bernama MOBA CUP 2018 “The Golden Hope” untuk siswa-siswi tingkat SMP/MTs/sederajat di Provinsi Jawa Timur. Melalui turnamen ini, diharapkan seluruh siswa  tingkat SMP/MTs/sederajat di Provinsi Jawa Timur dapat ikut serta secara aktif menyalurkan bakat mereka di bidang olahraga, yaitu bolabasket. Nantinya, para peserta turnamen ini akan direkomendasikan agar dapat bergabung untuk melanjutkan studi dan menjadi anggota keluarga Wikusama (ikatan alumni SMK Telkom Malang) untuk meneruskan ukiran prestasi berikutnya
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section2">
                <img src={require("../../assets/img/motif2.png")} className="img-fluid motif2" alt="motif" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="text-center judulHadiah brandon">HADIAH</h4>
                            <div className="hadiah">
                                <div className="detail-hadiah">
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <img src={require("../../assets/img/pialamoba.png")} className="img-fluid" alt="" />
                                            <br/>
                                            <br/>
                                            <h6 className="text-center txt-grey">Uang Pembinaan</h6>
                                            <h6 className="text-center txt-grey">Sertifikat&nbsp;&nbsp;</h6>
                                            <h6 className="text-center txt-grey">Piala &nbsp;&nbsp;</h6>
                                            <h5 className="text-center text-oren">Total Hadiah<br/>Rp 17.000.000</h5>
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
                                            <h6>Pembukaan pendaftaran</h6>
                                            <h6 className="txt-grey h6">8 September 2018</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row timeline_item">
                                    <div className="col-md-4 text-center">
                                        <div className="timeline_item_icon text-center"></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="timeline_single">
                                            <h6>Penutupan pendaftaran</h6>
                                            <h6 className="txt-grey h6">5 Oktober 2018</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row timeline_item">
                                    <div className="col-md-4 text-center">
                                        <div className="timeline_item_icon text-center"></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="timeline_single">
                                            <h6>Babak Penyisihan</h6>
                                            <h6 className="txt-grey h6">21, 27, 28 Oktober dan 10 November 2018</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row timeline_item">
                                    <div className="col-md-4 text-center">
                                        <div className="timeline_item_icon text-center"></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="timeline_single">
                                            <h6>Pertandingan Semifinal</h6>
                                            <h6 className="txt-grey h6">11 November 2018</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row timeline_item">
                                    <div className="col-md-4 text-center">
                                        <div className="timeline_item_icon text-center"></div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="timeline_single">
                                            <h6>Pertandingan Final</h6>
                                            <h6 className="txt-grey h6">17 November 2018</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <img src={require("../../assets/img/motif3.png")} className="img-fluid motif3" alt="motif" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center brandon testimoni">Syarat dan Ketentuan</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="item">
                                <div className="col-md-12">
                                    <div className="box-image">
                                        <div className="box-body">
                                            <div className="body-content text-justify">
                                            <h6>1. Peserta wajib membuat akun dan melengkapi dashboard pendaftaran dengan data yang benar dan legal secara hukum di <span className="text-oren">www.mobacup.com</span>.</h6>
                                            <h6>2. Peserta yang ingin mendaftarkan <span className="text-oren">Tim Putra dan Tim Putri</span> diharapkan mendaftarkan <span className="text-oren">dua akun yang berbeda dengan asal sekolah yang sama</span>.</h6>
                                            <h6>3. Setiap tim wajib mengisi data <span className="text-oren">pelatih (wajib)</span>, <span className="text-oren">manajer (wajib)</span>, medis (optional), guru (optional), dan <span className="text-oren">pemain minimal 5 pemain (wajib)</span>.</h6>
                                            <h6>4. Setiap tim wajib mengupload <span className="text-oren">scan atau foto surat rekomendasi</span> yang diberikan oleh sekolah masing-masing di dashboard.</h6>
                                            <h6>5. Setiap tim yang telah melengkapi data harus membayar biaya pendaftaran sebesar <span className="text-oren">Rp 500.000</span> dengan transfer ke <span className="text-oren">Rekening BNI 0390 877 097 a.n. Bias Damiasa</span> dan mengupload <span className="text-oren">foto bukti transfer</span> di dashboard.</h6>
                                            <h6>6. Tunggu <span className="text-oren">verifikasi</span> dari admin untuk memastikan bahwa tim anda telah terdaftar sepenuhnya untuk mengikuti kompetisi <span className="text-oren">MOBA CUP 2018</span>.</h6>
                                            <h6>7. Peserta yang tidak dapat memenuhi persyaratan pendaftaran hingga batas waktu yang telah ditentukan dianggap pendaftarannya gagal.</h6>
                                            <h6>8. <span className="text-oren">Semua data</span> yang telah diisikan pada di dashboard pendaftaran <span className="text-oren">WAJIB</span> dibawa ketika pertandingan berlangsung sebagai <span className="text-oren">bukti fisik</span>.</h6>
                                            <h6>9. Jika ada hal yang dirasa kurang jelas bisa langsung menghubungi ke CP yang tersedia di bawah.</h6>
                                            </div>
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

                    <div className="box-galery d-block d-md-none">
                    <Slider {...settings}>
                                <div className="col-md-12">
                                    <img src={require("../../assets/img/foto0.JPG")} className="img-fluid p-20" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto1.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto2.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto3.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto4.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto5.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto6.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto7.JPG")} className="img-fluid" alt="" />
                                </div>
                        </Slider>
                    </div>
                    <div className="row">
                        <div className="box-galery col-md-12 d-none d-md-block">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto0.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto1.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto2.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto3.JPG")} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto4.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto5.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto6.JPG")} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-3">
                                    <img src={require("../../assets/img/foto7.JPG")} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <img src={require("../../assets/img/motif3.png")} className="img-fluid motif3" alt="motif" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center brandon testimoni">Testimoni</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                    <div className="box-image">
                                        <div className="box-header">
                                            <div className="avatar">
                                            <img src={require("../../assets/img/diky.png")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                            {this.state.testiDiky ? <p className="text-justify">{diky} <span name="testiDiky" className="text-oren clickable" onClick={() => this.dikyHandler()}>less</span></p> : <p className="text-justify">{diky.slice(0, 500)} ... <span name="testiDiky" className="text-oren clickable" onClick={() => this.dikyHandler()}>more</span></p> }
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Dikky Rahmad Shafara</h5>
                                                <h5>SMPN 18 Malang</h5>
                                                <h6>MOBA CUP 2017</h6>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                    <div className="box-image">
                                        <div className="box-header">
                                            <div className="avatar">
                                            <img src={require("../../assets/img/arya.jpeg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                            {this.state.testiArya ? <p className="text-justify">{arya} <span className="text-oren clickable" onClick={() => this.aryaHandler()}>less</span></p> : <p className="text-justify">{arya.slice(0, 500)} ... <span className="text-oren clickable" onClick={() => this.aryaHandler()}>more</span></p> }
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Arya Erlangga Fasa</h5>
                                                <h5>SMPN 3 Lumajang</h5>
                                                <h6>MOBA CUP 2017</h6>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                    <div className="box-image">
                                        <div className="box-header">
                                            <div className="avatar">
                                            <img src={require("../../assets/img/wibi.png")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                            <p className="text-justify">Saya peserta Moba 2017 mewakili team SMP 5 Malang, team saya saat itu tidak juara tapi saya jadi nominasi favorite player, berkat MOBA saya juga mantap masuk Moklet (Telkom) Malang.

Alhamdulilah saya di rekomendasikan oleh Panitia MOBA dan bisa diterima di Moklet Ngalam.

Saya Bahagia bisa menjadi bagian dari SMK Telkom Malang, bukan hanya punya teman-teman baru tapi juga mendapatkan kekeluargaan yang seru. 

Disini Saya bergabung dengan tim Basket TSBC dan berharap tim kami bisa menjadi juara DBL</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Fareladzin Wibi Ramadhan</h5>
                                                <h5>SMPN 5 Malang</h5>
                                                <h6>MOBA CUP 2017</h6>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <img src={require("../../assets/img/motif3.png")} className="img-fluid motif3" alt="motif" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center brandon testimoni">What They Say About SMK Telkom Malang and TSBC</h4>
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
                                                <img src={require("../../assets/img/alumni/bagas.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">MOBA CUP adalah ajang turnamen bola basket SMP dan sederajatnya.
Saya salah satu panitia MOBA CUP sebelumnya merasa sangat senang dan bangga bahwa kami (panitia dan keluarga besar SMK TELKOM MALANG) bisa menampung bakat minat para pemain basket tingkat SMP dan sederajatnya. 

Sangat hebat dan keren
Saya bangga menjadi bagian dari MOBA CUP.
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
                                                <img src={require("../../assets/img/alumni/dandy.JPG")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">TSBC bagi saya bukan hanya sekadar organisasi basket, lebih dari itu TSBC adalah rumah dimana saya membentuk karakter. Kekeluargaan yang baik didukung dengan coach yang super greget membuat TSBC sangat berkesan bagi saya. Saya sangat beruntung pernah menjadi bagian dari TSBC dan Telkom School malang, rumah yang selalu membuat saya ingin kembali.</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Dandy Purba Cantaka</h5>
                                                <h5>PT Sinergy Informasi Pratama</h5>
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
                                                <img src={require("../../assets/img/alumni/novii.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">TSBC itu bagian dari keluarga saya.  Bukan hanya sekedar organisasi ekstrakulikuler,  TSBC merupakan tempat untuk membangun solidaritas,  kekompakan,  dan kekeluargaan. Harapan saya  untuk TSBC semoga semakin sukses membuat acara / event yang dapat menciptakan generasi handal dalam dunia basket.  Sa du ti teamworkkk.</p>
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
                                                <p className="text-justify">Basket adalah sesuatu yang menurut saya nyaman di lakukan. Apalagi bisa bergabung dengan sub organisasi TSBC. Selain basket, kita bisa bersenang bersama2 dengan melakukan hal hal selain basket. Intinya TSBC itu bisa membuat masa masa muda menjadi lebih menarik dan bisa selalu di kenang.</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Nanda Setya Pramudya</h5>
                                                <h5>PT Metrosolusi Teknologi Indonesia</h5>
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
                                                <img src={require("../../assets/img/alumni/lana.jpeg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">Telkom Basketball Club atau biasa disebut TSBC sudah merupakan keluarga bagi saya. Basket juga merupakan salah satu hal yang saya senangi, apalagi didukung dengan adanya TSBC yang sudah saya anggap sebagai keluarga. TSBC nggak cuman mengajarkan teknik cara bermain basket, latian, ikut tournament, walaupun nggak terlalu jago basket kalian juga boleh ikut TSBC karena disini kita juga diajari cara organisasi yang baik dan kekeluargaan. The best offense is good defense</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Arkhab Maulana</h5>
                                                <h5>PT Sinergy Informasi Pratama</h5>
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
                                                <p className="text-justify">SMK TELKOM dengan disiplin ATTITUDE IS EVERYTHING bener bener mendidik saya dlm hal bermasyarakat. Karna yg dibutuhkan tidak hanya otak yg cerdas tapi sikap yg benar dlm menghadapi dunia kerja nantinya. Last but not least, SPBC IS FAMILY! Buktinyaaa ya ini... kami masih saling komunikasi, main bareng sampek sekarang.</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Hanna Anie Sharlene Rayitno Soebari</h5>
                                                <h5>PT. Alur Pelayaran Barat Surabaya / institut teknologi sepuluh nopember </h5>
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
                                                <p className="text-justify">Belajar di SMK Telkom Malang sangatlah menyenangkan apalagi kita disini mempelajari IT, yang mana sangatlah penting sekaligus berguna sekali bagi masa sekarang maupun masa depan, disini kita juga diajarkan apa makna kekeluargaan, seperti saat saya memutuskan untuk bergabung dengan TSBC, bukan hanya basket saja yang kami lakukan, tetapi pentingnya akan kekeluargaan pun kita terapkan juga seperti kita melakukan jumat sedekah yang mana nantinya akan disalurkan ke panti asuhan, kita pun juga menyumbang qurban yang mana kita turut turun ke masyarakat dan membagikan daging qurban tersebut. Meskipun background kita  adalah basket bukan berarti yang tidak bisa basket tidak boleh bergabung, TSBC terbuka untuk siapapun. SADUTI TEAMWORK!!</p>
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
                                                <p className="text-justify"><br/>Sekolah di SMK Telkom punya banyak keuntungan. Terutama bagi kamu yang dari luar kota sehingga bisa belajar hidup mandiri dan explore segala hal. Jangan cuma belajar formal tapi ikut juga kegiatan non formal. Basket salah satunya jadi organisasi favorit di moklet<br/></p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>jody baharizki</h5>
                                                <h5>Pemilik Emmh Snack Indonesia</h5>
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
                                                <p className="text-justify">Saya sangat senang dan bangga menjadi lulusan dari SMK TELKOM. Salah satu alasan saya sangat senang berada di sekolah ini adalah , bergabungnya saya dengan tim basket di sekolah atau yg mempunyai nama TSBC. Saya suka dengan pertemanan dan kekompakan kami didalam TSBC ini. Berkat TSBC saya mendapat teman yang banyak, dan juga easy going. Satu lagi yang saya sangat suka adalah kekeluargaan di TSBC ini sangat erat. Pokoknya saya sangat beruntung bisa bergabung dengan TSBC dan menjadi alumni dari sekolah ini. Semoga di tahun tahun berikutnya lebih banyak lagi adik adik yang masuk SMK TELKOM dan TSBC . dijamin masa SMAnya lebih UNFORGETABLE!!!</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>ANGGI LISDAYANTI</h5>
                                                <h5>PT. Wahana Makmur Sejati / Binus University</h5>
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
                                                <p className="text-justify">Sekolah ini yang mengajarkan apa artinya disiplin, menghargai waktu, yang pasti untuk menjadi orang sukses. Dan sub organ TSBC yang mengajarkan tidak ada teman, senior ataupun junior, disini semuanya saudara, semuanya keluarga, tanpa ada perbedaan. Silahkan bagi kalian yang ingin mencari pengalaman baru, keluarga baru, dan yang pasti ingin sukses disini adalah jembatan nya.</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Muhamad Miftahul Iqbal Albana</h5>
                                                <h5>PT. Telkom Akses / Universitas Merdeka Malang</h5>
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
                                                <p className="text-justify">Terima kasih saya ucapkan kepada SMK Telkom Malang karena sudah mengajarkan keterampilan akademis dan non akademis serta soft skill yang sangat berguna dalam melanjutkan ke jenjang berikutnya. Disamping itu, teman-teman dari berbagai daerah serta ikatan alumni Wikusama sangat berperan penting setelah lulus dari SMK Telkom Malang.
Pengalaman menjadi bagian dari SPBC atau yang sekarang lebih dikenal dengan TSBC adalah kekeluargaan yang sangat erat di dalam maupun di luar lapangan. Disamping materi latihan yang diberikan oleh pelatih, kami juga saling berbagi pengalaman dalam bermain basket, karena siswa SMK Telkom Malang banyak yang berasal dari berbagai daerah di seluruh Indonesia yang tentunya memiliki karakternya masing-masing. Beberapa hal tersebut menjadi nilai tambah jika menjadi siswa SMK Telkom Malang yang mungkin belum tentu kita dapatkan di tempat lain. Salam, 1 2 3 Teamwork!</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Muhammad Lahoya Bagaskara</h5>
                                                <h5>Angkasa Pura I - Bandar Udara I Gusti Ngurah Rai</h5>
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
                                                <img src={require("../../assets/img/alumni/rochmawati.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">Kita diajarkan untuk menjadi pribadi yang solid, speed, smart yg d bangun dalam TSBC, selama di TSBC tidak hanya d ajarkan untuk menjadi seorang atlit basket, kita d ajarkan untung membangun dan belajar berorganisasi, dalam TSBC kekeluargaan di utamakan untuk menjadikan team yg kuat.</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Rochmawati Aprilia</h5>
                                                <h5>PT.Telkom Sigma Cipta Caraka / Universitas Gunadarma</h5>
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
                                                <img src={require("../../assets/img/alumni/pikacu.jpeg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">Disini saya bisa punya teman yang berasal dari luar kota bahkan luar pulau. Tidak hanya 3 tahun saat saya masih bersekolah, ikatan antar alumni sangatlah kuat. Meskipun kami terpisahkan jarak tapi kami masih erat dalam menjalin silaturahmi satu sama lain, itulah nilai plus yang saya banggakan. TSBC punya banyak kenangan, perjuangan dan kebanggaan tersendiri bagi saya. Tidak hanya latihan rutin, banyak kegiatann positif yang bisa ikuti contohnya acara bakti sosial, TSBC berkurban dan masih banyak lagi. So, kami nantikan kalian bergabung dengan ikatan keluarga SMK Telkom Malang dan jika kalian punya hobi basket jangan lupa untuk daftar TSBC ya</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Dian Nofika Prasetya Amanda</h5>
                                                <h5>PT. Adicipta Inovasi Teknologi</h5>
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
                                                <img src={require("../../assets/img/alumni/harifi.jpg")} alt="" />
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="body-content">
                                                <p className="text-justify">Menjadi bagian dari SMK Telkom Malang merupakan sebuah kebahagiaan bagi saya. disini saya diajarkan bukan hanya akademik, tapi juga non-akademik. Tidak salah bila ""Attitude Is Everything"" menjadi slogan bagi kami. Bukan hanya cerdas tapi kami juga dituntut untuk memiliki akhlak yang baik di kehidupan sehari-hari.

Di SMK Telkom saya bergabung dalam TSBC (Telkom School Basketball Club). Disini saya diajarkan bukan hanya basket, tapi juga bagaimana kita berorganisasi, berwirausaha, kegiatan sosial, dll. Banyak kenangan yang tidak dapat dilupakan terjadi di TSBC. Cocok banget buat orang yang hobi basket, tapi juga pingin punya pengalaman berorganisasi. I love basketball, but i love TSBC for the most.

Come join us, we wait for you. SA DU TI TEAMWORK!!!!!!!</p>
                                            </div>
                                            <div className="profil text-center text-capitalize">
                                                <h5>Salsabila Al Harifi</h5>
                                                <h5>PT. MEDIA TELEKOMUNIKASI MANDIRI / BINUS UNIVERSITY</h5>
                                                <h6>Lulusan Tahun 2016</h6>
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
                    <div className="container">
                        <div className="col-md-12 text-center m-t-40">
                            <div className="row">
                                <div className="py-5 col-md-4"><img height="85px" src={require("../../assets/img/indihome.png")} alt="telkom akses"/></div>
                                <div className="py-5 col-md-4"><img height="125px" src={require("../../assets/img/milo.png")} alt="milo"/></div>
                                <div className="py-5 col-md-4"><img height="125px" src={require("../../assets/img/pocari_sweat.png")} alt="pocari sweat"/></div>
                                <div className="py-5 col-md-4"><img height="85px" src={require("../../assets/img/telkomsel.png")} alt="telkom akses"/></div>
                                <div className="py-5 col-md-4"><img height="125px" src={require("../../assets/img/tsbc.png")} alt="tsbc"/></div>
                                <div className="py-5 col-md-4"><img height="125px" src={require("../../assets/img/lapis_malang.png")} alt="lapis malang"/></div>
                            </div>
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
                            <div className="col-md-4 footer-sekolah text-center">
                                <h4>SMK TELKOM MALANG</h4>
                                <h6>Jl. Danau Ranau, Sawojajar, Malang 65139</h6>
                                <h6>www.smktelkom-mlg.sch.id</h6>
                            </div>
                            <div className=" col-md-4 footer-telepon text-center">
                                <h4>Hubungi Kami</h4>
                                <h6>085 100 188 805 - Heny</h6>
                                <h6>085 103 656 277 - Nia&nbsp;&nbsp;&nbsp;</h6>
                            </div>
                            <div className=" col-md-4 footer-telepon text-center">
                                <h4>Info Lebih Lanjut</h4>
                                <h6><i class="fas fa-envelope"></i> mobacup@gmail.com</h6>
                                <h6><i class="fab fa-instagram"></i> @mobacup</h6>
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
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage))
