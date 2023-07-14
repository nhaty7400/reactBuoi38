import React, { Component } from "react";

// kết nối component với redux
import { connect } from "react-redux";

class CountRedux extends Component {
  render() {
    console.log(this.props); // {count:giaTriStateLayTuRedux}
    return (
      <div>
        <h1>{this.props.count}</h1>
        <div>
          <button
            onClick={this.props.tangCount}
            className="btn btn-success mx-2"
          >
            +
          </button>
          <button onClick={this.props.giamCount} className="btn btn-success">
            -
          </button>
        </div>
      </div>
    );
  }
}

// chuyển state từ trên redux về component
// 1.get state
const mapStateToProps = (rootReducer) => {
  return {
    // tenProps: giaTriStateLayTuRedux
    count: rootReducer.countReducer.count,
  };
};

// 2.set state
const mapDispatchToProps = (dispatch) => {
  return {
    // tenProps: giaTri
    tangCount: () => {
      console.log("tang count");
      // đưa thông điệp lên trên redux

      // 1. action
      const action = {
        // format chuẩn.
        type: "tang-count", // thông điệp
        payload: 1, // tệp đính kèm
      };

      // 2. dispatch để gửi action lên reducer của redux
      // tất cả reducer trên redux đều nhận được thông điệp gửi lên.

      // mong muốn set state tại reducer thì vào reducer đó xử lý
      dispatch(action);
    },
    giamCount: () => {
      console.log("giam count");

      dispatch({
        type: "giam-count",
      });
    },
  };
};

// lên redux lấy state về
// cách kết nối redux với component
export default connect(mapStateToProps, mapDispatchToProps)(CountRedux); // high order component (HOC)
// trả về 1 component + redux

// 1. set up reducer => state default => default params
// 2. - lấy state từ trên redux về.
// - connect redux với component của chúng ta. import connect từ react-redux
// - khai báo function mapStateToProps nhiệm vụ chuyển state từ trên redux về component, truyền vào connect. Vị trí tham số thứ nhất.
// 3. set state, cập nhật lại state cho redux.
// - connect redux với component của chúng ta. import connect từ react-redux
// - khai báo function mapDispatchToProps: nhiệm vụ gửi một thông điệp redux cập nhật lại state. Vị trí tham số thứ 2.

// vd: component chỉ có set state không có get state
// connect(null,mapDispatchToProps)([--COMPONENT--])

// vd: component chỉ có get state không có set state
// connect(mapStateToProps,[--không truyền | null--])([--COMPONENT--])
