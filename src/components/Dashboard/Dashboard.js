import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../Common/Navbar';
import Team from './Team';
import Step from './Step';
import DataTeam from './DataTeam';
import Syarat from './Syarat';
import Form from './Form';
import { withRouter } from 'react-router-dom';

export class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state={
            modalOpen : false,
            namaForm: ''
        }
        this.modalToggle = this.modalToggle.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    modalToggle = (namaForm) => {
        this.setState({modalOpen : true, namaForm})
    }
    closeModal = () => {
        this.setState({modalOpen : false})
    }

  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div id="wrapper">
        <Navbar />
        <div className="page-wrapper">
            <div className="container-fluid">
                <Team/>
                <Step/>
                <div className="row">
                    <DataTeam modalToggle={this.modalToggle}/>
                    <Syarat />
                    <Form modalToggle={this.closeModal} namaForm={this.state.namaForm} modalOpen={this.state.modalOpen} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard))
