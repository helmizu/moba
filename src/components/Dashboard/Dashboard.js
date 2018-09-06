import React, { Component } from 'react'; 
import Navbar from './Navbar';
import Team from './Team';
import Step from './Step';
import DataTeam from './DataTeam';
import Syarat from './Syarat';
import Form from './Form';

class Dashboard extends Component {
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
        );
    }
}

export default Dashboard;
