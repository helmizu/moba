import React, { Component } from 'react';

class Step extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">
                                Langkah 1 &nbsp;
                            </h3>
                            <ul class="list-inline two-part">
                                <li class="title">
                                    <span>Lengkapi Data Tim</span>
                                </li>
                                <li class="text-right sign"><i class="fa fa-check success"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Langkah 2</h3>
                            <ul class="list-inline two-part">
                                <li class="title">
                                    <span>Surat Rekomendasi</span>
                                </li>
                                <li class="text-right sign"><i class="fa fa-exclamation danger"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Langkah 3</h3>
                            <ul class="list-inline two-part">
                                <li class="title">
                                    <span>Upload Bukti Transfer</span>
                                </li>
                                <li class="text-right sign"><i class="fa fa-exclamation danger"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-xs-12">
                        <div class="white-box analytics-info">
                            <h3 class="box-title">Langkah 4</h3>
                            <ul class="list-inline two-part">
                                <li class="title">
                                    <span>Menunggu Verifikasi</span>
                                </li>
                                <li class="text-right sign"><i class="fa fa-exclamation danger"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Step;
