import React, { Component } from "react";

export default class ChangeCar extends Component {
  state = {
    srcImage: "/image/cars/black-car.jpg",
  };

  changeSrcImage = (src) => {
    return () => {
      this.setState({ srcImage: src });
    };
  };

  render() {
    return (
      <div>
        <img
          style={{
            width: "100%",
          }}
          src={this.state.srcImage}
          alt=""
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            onClick={this.changeSrcImage("/image/cars/red-car.jpg")}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={this.changeSrcImage("/image/cars/black-car.jpg")}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={this.changeSrcImage("/image/cars/silver-car.jpg")}
            className="btn btn-secondary"
          >
            Silver
          </button>
          <button
            onClick={this.changeSrcImage("/image/cars/steel-car.jpg")}
            className="btn btn-warning"
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}
