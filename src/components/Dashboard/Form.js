import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div id="myModal" className={this.props.modalOpen === true ? 'modal fade in block' : 'modal fade'}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={this.props.modalToggle} type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Data {this.props.namaForm}</h4>
                        </div>
                        <form className="form-horizontal form-material">
                            <div className="modal-body">

                                <div className="white-box">
                                    <div className="form-group row">
                                        <label className="col-md-3">Nama Lengkap</label>
                                        <div className="col-md-9">
                                            <input type="text" placeholder="Johnathan Doe" className="form-control form-control-line" />
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
                                        <label className="col-sm-3 col-form-label">{this.props.namaForm === 'Pemain' ? 'Kartu Pelajar' : 'KTP'}</label>
                                        <div className="col-sm-9">
                                            <div className="custom-file">
                                                <input value="" type="file" className="custom-file-input" />
                                                <label className="custom-file-label">Pilih Gambar</label>
                                            </div>
                                        </div>
                                    </div>
                                    {this.props.namaForm === 'Pelatih'
                                        ? <div className="form-group row">
                                            <label className="col-sm-3 col-form-label">Sertifikat</label>
                                            <div className="col-sm-9">
                                                <div className="custom-file">
                                                    <input value="" type="file" className="custom-file-input" />
                                                    <label className="custom-file-label">Pilih Gambar</label>
                                                </div>
                                            </div>
                                        </div>
                                        : null
                                    }
                                </div>

                            </div>
                            <div className="modal-footer">
                                <div className="form-group">
                                    <div className="col-sm-12">
                                        <input type="submit" className="btn btn-success right left-8" value="Submit Data" />
                                        <button type="button" onClick={this.props.modalToggle} className="btn btn-default right">Close</button>
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
