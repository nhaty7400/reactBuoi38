import React, { Component } from "react";

import "./style.css";

// default
import style from "./style.module.css";

/**
 * 1. Inline Style
 * 2. File Css: ảnh hưởng đến toàn bộ dự án. tên class ngắn gọn
 * 3. css module: không bị ảnh hưởng đến toàn bộ dự án. dài.
 */

export default class StyleInReact extends Component {
  render() {
    // inline style: nhận giá trị là một object
    // 1. chuyển font-size => fontSize
    // background-color => backgroundColor
    // 2. truyền giá trị thuộc tính của css là string.

    const inlineStyle = {
      color: "blue",
      fontSize: "40px",
    };
    return (
      <div>
        <p className={style.TextBold}>PascalCase</p>
        <p className={style["text-bold"]}>text-bold</p>
        <p className={style["text-heading"]}>Text-Heading</p>
        <div
          // 1. binding data
          // 2. là object
          style={{
            color: "blue",
            fontSize: "40px",
            backgroundColor: "black",
            fontWeight: 700,
          }}
        >
          StyleInReact
        </div>
        <h1 className="heading">Lorem ipsum dolor sit amet.</h1>
      </div>
    );
  }
}
