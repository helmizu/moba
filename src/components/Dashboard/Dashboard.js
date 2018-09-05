import React, { Component } from 'react'; 
import Navbar from './Navbar';
import Team from './Team';
import Step from './Step';
import DataTeam from './DataTeam';
import Syarat from './Syarat';
import Form from './Form';

class Dashboard extends Component {
    render() {
        return (
            <div id="wrapper">
                <Navbar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <Team/>
                        <Step/>
                        <div className="row">
                            <DataTeam/>
                            <Syarat />
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
