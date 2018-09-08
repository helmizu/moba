import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Common/Navbar';
import Loader from '../Common/Loader';
import Team from './Team';
import Step from './Step';
import DataTeam from './DataTeam';
import Syarat from './Syarat';
import Form from './Form';
import { withRouter } from 'react-router-dom';
import { loadData, loadDetail } from '../../actions/dataAction';

export class Dashboard extends Component {
    constructor(){
        super()
        
        this.state={
            modalOpen : false,
            namaForm: '',
            update : false
        }
        this.modalToggle = this.modalToggle.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    
    modalToggle = (namaForm, update) => {
        this.setState({modalOpen : true, namaForm, update : update})
        if (update) {
            if (namaForm !== "Pemain") {
                this.props.loadDetail(namaForm, this.props.global.user.sekolah)
            }
        }
    }

    closeModal = () => {
        this.setState({modalOpen : false, update : false})
    }
    
    static propTypes = {
        global: PropTypes.object.isRequired,
        data: PropTypes.object.isRequired,
        loadData: PropTypes.func.isRequired,
        loadDetail: PropTypes.func.isRequired,
    }
    
    componentDidMount = () => {
      this.props.loadData(this.props.global.user.sekolah)
    }
    
    render() {
        const { sekolah } = this.props.global.user
        const { pelatih, manager, pemain, syarat } = this.props.data
        return (
            <div id="wrapper">
            {this.props.data.loading ? < Loader /> : ""}
            <Navbar />
            <div className="page-wrapper">
            <div className="container-fluid">
            <Team team={sekolah}/>
            <Step pelatih={pelatih} manager={manager} pemain={pemain} surat_rekomendasi={syarat.rekomendasi} bukti_transfer={syarat.bukti_transfer} verified={syarat.verified} />
            <div className="row">
            <DataTeam data={this.props.data} modalToggle={this.modalToggle}/>
            <Syarat />
            <Form modalToggle={this.closeModal} namaForm={this.state.namaForm} modalOpen={this.state.modalOpen} update={this.state.update} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    global : state.global,
    data : state.data
})

const mapDispatchToProps = {
    loadData,
    loadDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
