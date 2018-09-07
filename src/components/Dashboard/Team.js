import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div>
                <div className="row bg-title">
                    <div className="col-lg-12">
                        <h4 className="page-title text-uppercase">{this.props.team}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
