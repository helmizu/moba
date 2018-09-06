import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pemain = (
            <div class="white-box">
                <div class="form-group row">
                    <label class="col-md-3">Nama Lengkap</label>
                    <div class="col-md-9">
                        <input type="text" placeholder="Johnathan Doe" class="form-control form-control-line" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Foto</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Kartu Pelajar</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
            </div>
        )

        const pelatih = (
            <div class="white-box">
                <div class="form-group row">
                    <label class="col-md-3">Nama Lengkap</label>
                    <div class="col-md-9">
                        <input type="text" placeholder="Johnathan Doe" class="form-control form-control-line" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Foto</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">KTP</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Sertifikat</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
            </div>
        )

        const manajemen = (
            <div class="white-box">
                <div class="form-group row">
                    <label class="col-md-3">Nama Lengkap</label>
                    <div class="col-md-9">
                        <input type="text" placeholder="Johnathan Doe" class="form-control form-control-line" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Foto</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">KTP</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
            </div>
        )

        const guru = (
            <div class="white-box">
                <div class="form-group row">
                    <label class="col-md-3">Nama Lengkap</label>
                    <div class="col-md-9">
                        <input type="text" placeholder="Johnathan Doe" class="form-control form-control-line" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Foto</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">KTP</label>
                    <div className="col-sm-9">
                        <div className="custom-file">
                            <input value="" type="file" className="custom-file-input" />
                            <label className="custom-file-label">Pilih Gambar</label>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div id="myModal" class={this.props.modalOpen === true ? 'modal fade in block' : 'modal fade'}>
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button onClick={this.props.modalToggle} type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Data {this.props.namaForm}</h4>
                        </div>
                        <form class="form-horizontal form-material">
                            <div class="modal-body">

                            {
                                this.props.namaForm === 'Pelatih'
                                ? pelatih
                                : this.props.namaForm === 'Pemain' 
                                    ? pemain 
                                    : this.props.namaForm === 'Manajemen' 
                                        ?  manajemen
                                        : this.props.namaForm === 'Guru' 
                                            ? guru  
                                            : null
                            }


                            </div>
                            <div className="modal-footer">
                                <div class="form-group">
                                    <div class="col-sm-12">
                                        <input type="submit" class="btn btn-success right left-8" value="Submit Data" />
                                        <button type="button" onClick={this.props.modalToggle} class="btn btn-default right">Close</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Form;
