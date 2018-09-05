import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-default navbar-dashboard navbar-static-top m-b-0">
                    <div class="navbar-header">
                        <div class="top-left-part">
                            <a class="logo" href="index.html">
                                <b>
                                    <img src="../plugins/images/admin-logo.png" alt="home" class="dark-logo" />
                                    <img src="../plugins/images/admin-logo-dark.png" alt="home" class="light-logo" />
                                </b>
                            </a>
                        </div>
                        <ul class="nav navbar-top-links navbar-right pull-right">
                            <li>
                                <a class="profile-pic" href="#"><img src="../plugins/images/shutdown.png" alt="user-img" width="36" class="img-circle" /><b class="hidden-xs">Steave</b></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
