import React, { Component } from "react";

export default class HandleEvent extends Component {
  // không phải thuần method: thuộc tính có giá trị là một function

  // 1. Function không có tham số truyền vào
  fn1 = () => {
    alert("Click Me 1");
  };

  // currying: gọi 1 function trả về 1 function
  currying = () => {
    return () => {
      alert("Click me 3");
    };
  };

  fn4 = (title) => {
    alert(title);
  };

  fn5 = (title) => {
    // closure
    // sử dụng giá trị bên ngoài phạm vi của nó.
    return () => {
      alert(title);
    };
  };

  render() {
    const fn2 = () => {
      alert("Click Me 2");
    };
    return (
      <div>
        {/* onClick: yêu cầu nhận vào một function */}
        <button onClick={this.fn1}>Click me</button>
        {/* */}
        <button onClick={fn2}>Click me 2</button>

        {/* Thực thi ngay lập tức method currying */}
        <button onClick={this.currying()}>Click me 3</button>

        <button
          onClick={() => {
            // inline function
            this.fn4("hihihihihi");
          }}
        >
          Click me 4
        </button>

        {/* Error: declaration function từ khóa this bị undefined */}
        <button
          onClick={function () {
            // định nghĩa riêng
            console.log(this); // undefined
          }}
        >
          Click me 5
        </button>

        <button
          onClick={() => {
            // không có định nghĩa riêng
            console.log(this);
          }}
        >
          Click me 6
        </button>

        <button onClick={this.fn5("hhahah")}>Click me 7</button>

        <button onClick={this.fn4.bind(this, "hahahah")}>Click me 8</button>
      </div>
    );
  }
}
