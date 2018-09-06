import React, { Component } from 'react';

class Step extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">
                                Langkah 1 &nbsp;
                            </h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Lengkapi Data Tim</span>
                                </li>
                                <li className="text-right sign"><i className="fa fa-check success"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 2</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Surat Rekomendasi</span>
                                </li>
                                <li className="text-right sign"><i className="fa fa-exclamation danger"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 3</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Upload Bukti Transfer</span>
                                </li>
                                <li className="text-right sign"><i className="fa fa-exclamation danger"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="white-box analytics-info">
                            <h3 className="box-title">Langkah 4</h3>
                            <ul className="list-inline two-part">
                                <li className="title">
                                    <span>Menunggu Verifikasi</span>
                                </li>
                                <li className="text-right sign"><i className="fa fa-exclamation danger"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step;
