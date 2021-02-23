import React, { Component } from 'react'

export default class DetailsProd extends Component {
  render() {
    const { sp } = this.props;
    return (
      <div className="row" style={{height: 525}}>
        <div className="col-5">
          <h1 className="text-center mb-3">{sp?.tenSP}</h1>
          <img src={sp?.hinhAnh} style={{ width: "100%" }} />
        </div>
        <div className="col-7">
          <h1 className="mb-3">Thông số kỹ thuật</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn Hình</td>
                <td>{sp?.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{sp?.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{sp?.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{sp?.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{sp?.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{sp?.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}