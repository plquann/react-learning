import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    const { sp, onClick, addCart} = this.props;
    return (
      <div className="col-12 col-lg-4">
        <div className="card" style={{height: "100%"}}>
          <img className="card-img-top" src={sp.hinhAnh} style={{height: 300}} />
          <div className="card-body">
            <h4 className="card-title">{sp.tenSP}</h4>
            <p className="card-text">{sp.giaBan}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" onClick={() => onClick(sp.maSP)}>
              Thông tin chi tiết
            </button>
            <button className="btn btn-danger ml-3" onClick={() => addCart(sp)}>Add Cart</button>
          </div>
        </div>
      </div>

    )
  }
}