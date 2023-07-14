import React, { Component } from 'react'
import { connect } from "react-redux";

// component dùng để tái sử dụng
// không nên connect trực tiếp, lấy state trực tiếp.
export default class PhoneItemRedux extends Component {
    render() {
        // JSX
        const item = this.props.phone;
        const { onChangeSanPham } = this.props;
        const { onAddSanPham } = this.props;
        return (
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.hinhAnh} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.tenSP}</h5>
                <p className="card-text">{item.giaBan}</p>
                <div className="d-flex">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      onChangeSanPham(item);
                    }}
                  >
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => {
                      onAddSanPham(item);
                    }}
                    className="btn btn-primary mx-4"
                  >
                    Thêm sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

