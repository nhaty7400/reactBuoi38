import React, { Component } from "react";
import XemChiTietRedux from "./xem-chi-tiet-redux";
import GioHangRedux from "./gio-hang-redux";
import { connect } from "react-redux";
import PhoneItemRedux from "./phone-item-redux";
import { PHONE_SHOP_TYPE } from "../../../redux/phone-shop/phone-shop.constant";
import { ChangeSanPhamChiTietCreator } from "../../../redux/phone-shop/phone-shop.action.js";
import { ThemSanPham } from "../../../redux/phone-shop/phone-shop.action.js";

const listPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "/image/phones/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "/image/phones/sp_blackberry.png",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "/image/phones/sp_iphoneX.png",
  },
];

class PhoneShopRedux extends Component {
  state = {
    count: 0,
    spChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "/image/phones/vsphone.jpg",
    },

    gioHang: [],
  };
  // state muốn xét lại được đặt ở đâu thì gọi method this.setState ở tại component đó.

  // binding lên giao diện, và xử lý xét lại state.

  handleChangeCount = (value) => {
    this.setState({
      count: this.state.count + value,
    });
  };

  // handleChangeSanPhamChiTiet = (sp) => {
  //   this.setState({
  //     spChiTiet: sp,
  //   });
  // };

  // handleAddSanPham = (sp) => {
  //   const indexSp = this.state.gioHang.findIndex(
  //     (item) => sp.maSP === item.maSP
  //   );

  //   let newGioHang = [];
  //   // -1: chưa có trong giỏ hàng
  //   if (indexSp === -1) {
  //     sp.soLuong = 1;
  //     newGioHang = [...this.state.gioHang, sp];
  //   } else {
  //     sp.soLuong += 1;
  //     // 2 | 1 | 3
  //     // xóa đi 1 phần tử có indexSp, và thêm sp vào vị trí đó
  //     this.state.gioHang.splice(indexSp, 1, sp); // splice thay đổi của mảng gốc
  //     // toSplice: không thay đổi mảng gốc

  //     newGioHang = this.state.gioHang;
  //   }
  //   this.setState({
  //     gioHang: newGioHang,
  //   });
  // };

  handleDeleteSp = (maSp) => {
    // lọc lấy ra những phần tử mà chúng ta không muốn xóa
    // xóa đi phần tử có maSP === maSp

    // window.confirm()=> return về true | false
    if (window.confirm("Bạn có chắc chắc muốn xóa hay không")) {
      const newGioHang = this.state.gioHang.filter(
        (item) => item.maSP !== maSp
      );
      this.setState({
        gioHang: newGioHang,
      });
    }
  };

  // nếu function có từ 2-3 tham số trở lên thì nên truyền dưới dạng object.
  handleChangeQuantity = (params) => {
    const { quantity, maSP } = params;

    console.log({ quantity, maSP });
    const sanPham = this.state.gioHang.find((item) => item.maSP === maSP);

    if (!sanPham) return;

    if (sanPham.soLuong === 1 && quantity === -1) {
      this.handleDeleteSp(maSP);
      return;
    }
    sanPham.soLuong += quantity;
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  render() {
    // this.props => type object
    return (
      <div className="container">
        <GioHangRedux
          onDeleteSp={this.handleDeleteSp}
          gioHang={this.state.gioHang}
          onChangeQuantity={this.handleChangeQuantity}
        />
        <div className="d-flex gap-4 container mt-2">
          {listPhone.map((item) => {
            return (
              <PhoneItemRedux
                onAddSanPham={this.props.handleAddSanPham}
                onChangeSanPham={this.props.handleChangeSanPhamChiTiet}
                phone={item}
                key={item.maSP}
              />
            );
          })}
        </div>
        <div className="mt-2">
          <XemChiTietRedux sanPham={this.props.sanPhamChiTiet} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    sanPhamChiTiet: rootReducer.phoneShopReducer.spChiTiet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSanPhamChiTiet: (sanPham) => {
      const action = ChangeSanPhamChiTietCreator(sanPham);
      // console.log("------------");
      // console.log(action);
      // console.log("------------");
      // dispatch(action);
    },
    handleAddSanPham: (sanPham) => {
      const action = ThemSanPham(sanPham);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneShopRedux);

// chúng ta cần xét lại state cho sản phẩm chi tiết
