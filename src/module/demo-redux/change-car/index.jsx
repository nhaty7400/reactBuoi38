import React, { Component } from "react";

import { connect } from "react-redux";

const getSrcImage=(color)=>{
    return `/image/cars/${color}-car.jpg`;
}

class ChangeCarRedux extends Component {
  render() {
    return (
      <div className="container">
        <img
          style={{
            width: "100%",
          }}
          src={this.props.srcImage}
        />

        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => {
              this.props.handleChangeCar(getSrcImage("red"));
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.props.handleChangeCar(getSrcImage("black"));
            }}
            className="btn btn-dark"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.props.handleChangeCar(getSrcImage("silver"));
            }}
            className="btn btn-secondary"
          >
            Silver
          </button>
          <button
            onClick={() => {
              this.props.handleChangeCar(getSrcImage("steel"));
            }}
            className="btn btn-warning"
          >
            Steel
          </button>
        </div>
      </div>
    );
  }
}

// lấy state từ redux về component
const mapStateToProps = (rootReducer) => {
  return {
    // truyền vào component 1 prop tên srcImage
    srcImage: rootReducer.carReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCar: (src) => {
      dispatch({
        type: "change-img",
        payload: src,
      });
    },
  };
};

// kết nối redux  component của chúng ta.
export default connect(mapStateToProps,mapDispatchToProps)(ChangeCarRedux);
