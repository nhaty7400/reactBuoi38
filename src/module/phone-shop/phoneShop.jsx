import React, { Component } from "react";
import XemChiTiet from "./xem-chi-tiet";
import GioHang from "./gio-hang";

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

// component: logic + UI (X)

// component chỉ để show UI.
// redux thì xử lý logic.

export default class PhoneShop extends Component {
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

  handleChangeSanPhamChiTiet = (sp) => {
    this.setState({
      spChiTiet: sp,
    });
  };

  handleAddSanPham = (sp) => {
    const indexSp = this.state.gioHang.findIndex(
      (item) => sp.maSP === item.maSP
    );

    let newGioHang = [];
    // -1: chưa có trong giỏ hàng
    if (indexSp === -1) {
      sp.soLuong = 1;
      newGioHang = [...this.state.gioHang, sp];
    } else {
      sp.soLuong += 1;
      // 2 | 1 | 3
      // xóa đi 1 phần tử có indexSp, và thêm sp vào vị trí đó
      this.state.gioHang.splice(indexSp, 1, sp); // splice thay đổi của mảng gốc
      // toSplice: không thay đổi mảng gốc

      newGioHang = this.state.gioHang;
    }
    this.setState({
      gioHang: newGioHang,
    });
  };

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
  // đẩy lên gửi gửi link mình xem thử kì vậy ta :V :v ok a
  
  // nếu function có từ 2-3 tham số trở lên thì nên truyền dưới dạng object.
  handleChangeQuantity = (params) => {
    const { quantity, maSP } = params;

    console.log({ quantity, maSP });

    // 1. tìm sản phẩm có maSP trong giỏ hàng. nếu có thì tăng giảm.
    // - nếu có thì tăng giảm.
    // - thoát khỏi function => return.
    // 2. nếu như số lượng của sản phẩm đang là 1 và người dùng nhấn button giảm.
    // - xóa (V)
    // - giữ nguyên (X)

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
        <GioHang
          onDeleteSp={this.handleDeleteSp}
          gioHang={this.state.gioHang}
          onChangeQuantity={this.handleChangeQuantity}
        />
        <div className="d-flex gap-4 container mt-2">
          {listPhone.map((item) => {
            return (
              <PhoneItem
                onAddSanPham={this.handleAddSanPham}
                onChangeSanPham={this.handleChangeSanPhamChiTiet}
                phone={item}
                key={item.maSP}
              />
            );
          })}
        </div>
        <div className="mt-2">
          <XemChiTiet sanPham={this.state.spChiTiet} />
        </div>

        {/* <H1>[children]</H1> */}
        {/* <H1>Trung Tam Cyber Soft</H1> */}
        {/* Mỗi component counter được sử dụng nó sẽ có state riêng biệt */}
        {/* <Counter handleChangeCount={this.handleChangeCount}  count={this.state.count}/>
      <Show count={this.state.count}/> */}
      </div>
    );
  }
}

// class H1 extends Component {
//   render() {
//     // props children là một props đặc biệt nằm giữa 2 thẻ đóng và mở của component
//     return (
//       <h1
//         style={{
//           fontSize: "3rem",
//           color: "blue",
//         }}
//       >
//         {this.props.children}
//       </h1>
//     );
//   }
// }

/*
props vs state
state: - trạng thái của một component
       - [TRONG COMPONENT] có thể xét lại giá trị. {this.setState}
props: - giá trị truyền từ component cha --> con, giúp ta giao tiếp giữa 2 component với nhau.
       - [TRONG COMPONENT] không thể xét lại giá trị vì giá trị props được truyền từ bên ngoài vào
*/

// class Show extends Component{
//   render(){
//     return (
//       <>
//       <H1>{this.props.count}</H1>
//       </>
//     )
//   }
// }

// class Counter extends Component {

//   render() {
//     // là một biến, và xét lại giá trị của biến đó. mỗi lần xét lại giá trị mới thì nó sẽ tự động render lại giao diện
//     return (
//       <>
//         <h1>{this.props.count}</h1>
//         <button
//           className="btn btn-success"
//           onClick={() => {
//             this.props.handleChangeCount(1);
//           }}
//         >
//           +
//         </button>
//         <button
//           className="btn btn-success"
//           onClick={() => {
//             this.props.handleChangeCount(-1);
//           }}
//         >
//           -
//         </button>
//       </>
//     );
//   }
// }

class PhoneItem extends Component {
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
