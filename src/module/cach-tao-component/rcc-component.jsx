import React, { Component } from "react";
// rcc : tạo nhanh một class component.

// Quy tắc đặt tên react: đặt tên component phải viết hoa chữ cái đầu, phải đúng với quy ước đặt tên biến.

// Để đưa UI lên giao diện, thì chúng ta sẽ để nó trong return của method render.
export default class RccComponent extends Component {
  render() {
    return (<div>
        <button className="btn btn-success">Click Me</button>
    </div>
    );
  }
}
