// action creator
import { PHONE_SHOP_TYPE } from "./phone-shop.constant";

export const ChangeSanPhamChiTietCreator = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ChangeSanPhamChiTiet,
    payload,
  };
};

export const ThemSanPham = (payload) => {
  return {
    type: PHONE_SHOP_TYPE.ThemSanPham,
    payload,
  };
};
