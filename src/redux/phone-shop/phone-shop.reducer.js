import { PHONE_SHOP_TYPE } from "./phone-shop.constant";
const STATE_DEFAULT = {
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
export const phoneShopReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case PHONE_SHOP_TYPE.ChangeSanPhamChiTiet:
      state.spChiTiet = action.payload;
      return { ...state };
    case PHONE_SHOP_TYPE.ThemSanPham: {
      const sp = action.payload;

      // @TODO:1
      const indexSp = state.gioHang.findIndex((item) => sp.maSP === item.maSP);

      let newGioHang = [];
      // -1: chưa có trong giỏ hàng
      if (indexSp === -1) {
        sp.soLuong = 1;
        // @TODO:2
        newGioHang = [...state.gioHang, sp];
      } else {
        sp.soLuong += 1;
        // @TODO:3
        state.gioHang.splice(indexSp, 1, sp);
        // @TODO:4
        newGioHang = [...state.gioHang];
      }

      state.gioHang = newGioHang;
      // gioHang cùng địa chỉ, cùng giá trị
      // cùng giá trị thì redux nó sẽ không render lại
      return { ...state };
    }
    default:
      return state;
  }
};
