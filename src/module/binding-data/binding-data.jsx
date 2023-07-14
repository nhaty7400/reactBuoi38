import React, { Component } from "react";

export default class BindingData extends Component {
  // thuộc tính
  course = "ReactJS";

  // method
  showTitle() {
    return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, debitis.";
  }

  render() {
    // biến
    const cyber = "Cyber Soft";

    // function
    const showName = () => {
      return "meow meow";
    };

    // {}: binding data, đưa biến, property, kết quả sau khi gọi method, hay là function lên trên giao diện.

    //! Chú ý: không sử dụng kiểu dữ liệu: boolean, null, undefined để binding data
    // Binding data sẽ không nhận những kiểu dữ liệu như trên.

    // return phải có một thẻ ngoài bao bọc: div, Fragment, <></>
    // Không được return về 2 thẻ cùng cấp.

    // h1, div: element,
    // BindingData: component

    // JSX: element | component | string | number
    return (
      <div>
        {true}
        {false}
        {null}
        {undefined}

        {"BindingData"}
        <br />
        <p>Hôm nay học: {this.course}</p>
        <p>Tại: {cyber}</p>
        <p>{this.showTitle()}</p>
        <p>{showName()}</p>
      </div>
    );
  }
}
