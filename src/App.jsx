// import RccComponent from "./module/cach-tao-component/rcc-component";
// đây là file, tạo component App để đưa lên giao diện.

import RccComponent from "./module/cach-tao-component/rcc-component";
import RfcComponent from "./module/cach-tao-component/rfc-component";
// import Card from "./module/cach-tao-component/card";
import HomeLayout from "./module/home-layout/home-layout";
import BindingData from "./module/binding-data/binding-data";
import HandleEvent from "./module/handlde-event/handle-event";
import StyleInReact from "./module/style-in-react/style-in-react";
import State from "./module/state/state";
import TangGiamFontSize from "./module/state/tang-giam-fontsize";
import ChangeColorHouse from "./module/state/change-color-house";
import ChangeCar from "./module/state/change-car";
import RenderWithArray from "./module/render-with-array";
import ListCard from "./module/prop/listCard/listCard";
import PhoneShop from "./module/phone-shop/phoneShop";
import CountRedux from "./module/demo-redux/count";
import ChangeCarRedux from "./module/demo-redux/change-car";
import PhoneShopRedux from "./module/demo-redux/phone-shop-redux/phoneShop-redux";

// js + css + html => .jsx
function App() {
  // h1: thẻ html do react định nghĩa ra.
  return (
    <>
    <PhoneShopRedux/>
    {/* <ChangeCarRedux/> */}
    {/* <CountRedux/> */}
    {/* <PhoneShop/> */}
    {/* <ListCard/> */}
    {/* <RenderWithArray/> */}
    {/* <ChangeCar/> */}
    {/* <ChangeColorHouse/> */}
    {/* <TangGiamFontSize/> */}
    {/* <State/> */}
    {/* <StyleInReact/> */}
      {/* <HandleEvent /> */}
      {/* <BindingData/> */}
      {/* <HomeLayout /> */}
      {/* <h1>Hello World</h1> */}
      {/* 1. */}
      {/* <RccComponent /> */}
      {/* <RccComponent /> */}
      {/* <input/> */}

      {/* 2. */}
      {/* <RccComponent></RccComponent> */}
      {/* <p></p> */}

      {/* <RfcComponent />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </>
  );
}

export default App;
